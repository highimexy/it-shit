package market

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

// 1. STRUKTURY DANYCH (Zgodne z Twoim frontendem)
type Asset struct {
	Sym   string `json:"sym"`
	Price string `json:"price"`
	Chg   string `json:"chg"`
	Up    bool   `json:"up"`
}

type MarketRow struct {
	Category string  `json:"category"`
	Items    []Asset `json:"items"`
}

// Ustawienia dla WebSocketów
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	// Pozwala na połączenia z localhost:3000 (Next.js)
	CheckOrigin: func(r *http.Request) bool {
		return true 
	},
}

// 2. STREAMER (Hub do zarządzania połączeniami)
type Streamer struct {
	mu      sync.Mutex
	clients map[*websocket.Conn]bool
	data    []MarketRow
}

func NewStreamer() *Streamer {
	return &Streamer{
		clients: make(map[*websocket.Conn]bool),
		// Stan początkowy
		data: []MarketRow{
			{Category: "CRYPTO", Items: []Asset{{Sym: "BTC", Price: "68230.00", Chg: "+0.0%", Up: true}, {Sym: "ETH", Price: "3450.00", Chg: "+0.0%", Up: true}}},
			{Category: "US.STK", Items: []Asset{{Sym: "NVDA", Price: "875.28", Chg: "+0.0%", Up: true}, {Sym: "AAPL", Price: "168.22", Chg: "+0.0%", Up: true}}},
			{Category: "GLB.IDX", Items: []Asset{{Sym: "NIKKEI", Price: "39836.00", Chg: "+0.0%", Up: true}, {Sym: "DAX", Price: "18261.00", Chg: "+0.0%", Up: true}}},
			{Category: "PL.STK", Items: []Asset{{Sym: "WIG20", Price: "2450.00", Chg: "+0.0%", Up: true}, {Sym: "CDR", Price: "112.40", Chg: "+0.0%", Up: true}}},
		},
	}
}

// 3. OBSŁUGA NOWEGO POŁĄCZENIA
func (s *Streamer) HandleConnection(w http.ResponseWriter, r *http.Request) {
	// Upgrade ze zwykłego HTTP na stałe połączenie WebSocket
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("[WS ERROR]", err)
		return
	}
	defer ws.Close()

	// Rejestrujemy nowego klienta
	s.mu.Lock()
	s.clients[ws] = true
	s.mu.Unlock()

	log.Printf("[MARKET] Nowy klient terminala podłączony. Aktywnych: %d\n", len(s.clients))

	// Natychmiast wysyłamy mu aktualny stan
	s.broadcastTo(ws, s.data)

	// Utrzymujemy połączenie otwarte (czekamy na ewentualne rozłączenie)
	for {
		if _, _, err := ws.ReadMessage(); err != nil {
			break // Klient zamknął kartę lub zerwało internet
		}
	}

	// Sprzątanie po odłączeniu
	s.mu.Lock()
	delete(s.clients, ws)
	s.mu.Unlock()
	log.Println("[MARKET] Klient rozłączony.")
}

// 4. WORKER RYNKOWY (Działa w tle i wysyła dane)
func (s *Streamer) StartMarketEngine() {
	log.Println("[MARKET ENGINE] Silnik giełdowy uruchomiony...")

	for {
		time.Sleep(2 * time.Second) // Aktualizacja co 2 sekundy

		s.mu.Lock()
		// Symulacja wahań na rynku
		for i := range s.data {
			for j := range s.data[i].Items {
				item := &s.data[i].Items[j]
				
				// Losowy ruch o ułamek procenta
				change := (rand.Float64() * 0.4) - 0.2
				item.Up = change >= 0
				
				// Formatowanie stringów dla frontendu
				sign := ""
				if item.Up {
					sign = "+"
				}
				item.Chg = fmt.Sprintf("%s%.2f%%", sign, change)
			}
		}

		// Rozsyłamy zaktualizowane dane do WSZYSTKICH podłączonych terminali
		for client := range s.clients {
			err := client.WriteJSON(s.data)
			if err != nil {
				client.Close()
				delete(s.clients, client)
			}
		}
		s.mu.Unlock()
	}
}

func (s *Streamer) broadcastTo(client *websocket.Conn, data []MarketRow) {
	s.mu.Lock()
	defer s.mu.Unlock()
	client.WriteJSON(data)
}