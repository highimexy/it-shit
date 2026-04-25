package market

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

type Engine struct {
	mu   sync.RWMutex
	data []MarketRow
	hub  *Hub
}

type BinancePayload struct {
	Data BinanceTicker `json:"data"`
}

type BinanceTicker struct {
	Symbol      string      `json:"s"`
	Price       interface{} `json:"c"`
	ChangePrct  interface{} `json:"P"`
	CloseTime   interface{} `json:"C"`
	EventTime   interface{} `json:"E"`
	PriceChange interface{} `json:"p"`
}

type FinnhubQuote struct {
	CurrentPrice float64 `json:"c"`
	ChangePrct   float64 `json:"dp"`
}

func NewEngine(hub *Hub) *Engine {
	return &Engine{
		hub: hub,
		data: []MarketRow{
			{
				Category: "CRYPTO",
				Items: []Asset{
					{Sym: "BTC",  Price: "...", Chg: "...", Up: true},
					{Sym: "ETH",  Price: "...", Chg: "...", Up: true},
					{Sym: "SOL",  Price: "...", Chg: "...", Up: true},
					{Sym: "BNB",  Price: "...", Chg: "...", Up: true},
					{Sym: "XRP",  Price: "...", Chg: "...", Up: true},
					{Sym: "DOGE", Price: "...", Chg: "...", Up: true},
				},
			},
			{
				Category: "US.STK",
				Items: []Asset{
					{Sym: "NVDA", Price: "...", Chg: "...", Up: true},
					{Sym: "AAPL", Price: "...", Chg: "...", Up: true},
					{Sym: "MSFT", Price: "...", Chg: "...", Up: true},
					{Sym: "TSLA", Price: "...", Chg: "...", Up: true},
					{Sym: "AMD",  Price: "...", Chg: "...", Up: true},
					{Sym: "AMZN", Price: "...", Chg: "...", Up: true},
				},
			},
			{
				Category: "CMDTY",
				Items: []Asset{
					{Sym: "GOLD",  Price: "2345.10", Chg: "+0.12%", Up: true},
					{Sym: "SILVR", Price: "28.45",   Chg: "-0.04%", Up: false},
					{Sym: "OIL",   Price: "82.14",   Chg: "+1.20%", Up: true},
					{Sym: "NGAS",  Price: "2.14",    Chg: "-1.50%", Up: false},
					{Sym: "COPP",  Price: "4.52",    Chg: "+0.30%", Up: true},
					{Sym: "PLAT",  Price: "985.60",  Chg: "+0.45%", Up: true}, 
				},
			},
		},
	}
}

func (e *Engine) GetData() []MarketRow {
	e.mu.RLock()
	defer e.mu.RUnlock()
	return e.data
}

func (e *Engine) Start(finnhubAPIKey string) {
	log.Println("[MARKET ENGINE] Booting up data streams...")

	go e.connectBinance()

	if finnhubAPIKey != "" {
		log.Println("[MARKET ENGINE] Finnhub key found. Starting US Stocks live polling.")
		go e.pollUSStocks(finnhubAPIKey)
	} else {
		log.Println("[MARKET WARNING] Finnhub key missing. US Stocks will simulate.")
		go e.simulateUSStocks()
	}

	go e.simulateCommodities()
}

func (e *Engine) simulateCommodities() {
	for {
		time.Sleep(5 * time.Second)
		e.mu.Lock()
		for j := range e.data[2].Items {
			item := &e.data[2].Items[j]
			change := (rand.Float64() * 0.1) - 0.05
			item.Up = change >= 0
			sign := ""
			if item.Up {
				sign = "+"
			}
			item.Chg = fmt.Sprintf("%s%.2f%%", sign, change)
		}
		currentData := e.data
		e.mu.Unlock()
		e.hub.Broadcast(currentData)
	}
}

func (e *Engine) simulateUSStocks() {
	for {
		time.Sleep(3 * time.Second)
		e.mu.Lock()
		for j := range e.data[1].Items {
			item := &e.data[1].Items[j]
			change := (rand.Float64() * 0.4) - 0.2
			item.Up = change >= 0
			sign := ""
			if item.Up {
				sign = "+"
			}
			item.Chg = fmt.Sprintf("%s%.2f%%", sign, change)
		}
		currentData := e.data
		e.mu.Unlock()
		e.hub.Broadcast(currentData)
	}
}

func (e *Engine) pollUSStocks(apiKey string) {
	symbols := []string{"NVDA", "AAPL", "MSFT", "TSLA", "AMD", "AMZN"} 
	client := &http.Client{Timeout: 10 * time.Second}

	for {
		for _, sym := range symbols {
			url := fmt.Sprintf("https://finnhub.io/api/v1/quote?symbol=%s&token=%s", sym, apiKey)

			resp, err := client.Get(url)
			if err != nil {
				time.Sleep(2 * time.Second)
				continue
			}

			body, err := io.ReadAll(resp.Body)
			resp.Body.Close()
			if err != nil {
				time.Sleep(2 * time.Second)
				continue
			}

			var quote FinnhubQuote
			if err := json.Unmarshal(body, &quote); err != nil {
				time.Sleep(2 * time.Second)
				continue
			}

			if quote.CurrentPrice == 0 {
				time.Sleep(2 * time.Second)
				continue
			}

			formattedPrice := fmt.Sprintf("%.2f", quote.CurrentPrice)
			isUp := quote.ChangePrct >= 0
			sign := ""
			if isUp {
				sign = "+"
			}
			formattedChange := fmt.Sprintf("%s%.2f%%", sign, quote.ChangePrct)

			e.mu.Lock()
			for j := range e.data[1].Items {
				if e.data[1].Items[j].Sym == sym {
					e.data[1].Items[j].Price = formattedPrice
					e.data[1].Items[j].Chg = formattedChange
					e.data[1].Items[j].Up = isUp
				}
			}
			currentData := e.data
			e.mu.Unlock()

			e.hub.Broadcast(currentData)
			
			time.Sleep(2 * time.Second)
		}
	}
}

func parseSafeFloat(val interface{}) float64 {
	switch v := val.(type) {
	case float64:
		return v
	case string:
		f, _ := strconv.ParseFloat(v, 64)
		return f
	default:
		return 0
	}
}

func (e *Engine) connectBinance() {
	url := "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker/bnbusdt@ticker/xrpusdt@ticker/dogeusdt@ticker"

	for {
		log.Println("[BINANCE] Connecting to live crypto stream...")
		c, _, err := websocket.DefaultDialer.Dial(url, nil)
		if err != nil {
			log.Printf("[BINANCE ERROR] Failed to connect: %v. Retrying in 5s...", err)
			time.Sleep(5 * time.Second)
			continue
		}

		log.Println("[BINANCE] Connected successfully. Receiving live data.")

		for {
			var payload BinancePayload

			err := c.ReadJSON(&payload)
			if err != nil {
				log.Printf("[BINANCE ERROR] Connection dropped: %v", err)
				break
			}

			ticker := payload.Data
			if ticker.Symbol == "" {
				continue
			}

			priceFloat := parseSafeFloat(ticker.Price)
			changeFloat := parseSafeFloat(ticker.ChangePrct)

			var formattedPrice string
			if priceFloat < 10 {
				formattedPrice = fmt.Sprintf("%.4f", priceFloat)
			} else {
				formattedPrice = fmt.Sprintf("%.2f", priceFloat)
			}

			isUp := changeFloat >= 0
			sign := ""
			if isUp {
				sign = "+"
			}
			formattedChange := fmt.Sprintf("%s%.2f%%", sign, changeFloat)

			sym := ""
			switch ticker.Symbol {
			case "BTCUSDT": sym = "BTC"
			case "ETHUSDT": sym = "ETH"
			case "SOLUSDT": sym = "SOL"
			case "BNBUSDT": sym = "BNB"
			case "XRPUSDT": sym = "XRP"
			case "DOGEUSDT": sym = "DOGE"
			}

			if sym != "" {
				e.mu.Lock()
				for i := range e.data[0].Items {
					if e.data[0].Items[i].Sym == sym {
						e.data[0].Items[i].Price = formattedPrice
						e.data[0].Items[i].Chg = formattedChange
						e.data[0].Items[i].Up = isUp
						break
					}
				}
				currentData := e.data
				e.mu.Unlock()

				e.hub.Broadcast(currentData)
			}
		}
		c.Close()
	}
}