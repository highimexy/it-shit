package market

import (
	"sync"

	"github.com/gorilla/websocket"
)

// Hub manages connected WebSocket clients and broadcasting
type Hub struct {
	mu      sync.Mutex
	clients map[*websocket.Conn]bool
}

func NewHub() *Hub {
	return &Hub{
		clients: make(map[*websocket.Conn]bool),
	}
}

func (h *Hub) AddClient(ws *websocket.Conn) {
	h.mu.Lock()
	defer h.mu.Unlock()
	h.clients[ws] = true
}

func (h *Hub) RemoveClient(ws *websocket.Conn) {
	h.mu.Lock()
	defer h.mu.Unlock()
	if _, ok := h.clients[ws]; ok {
		delete(h.clients, ws)
		ws.Close()
	}
}

// Broadcast sends the current market state to all connected frontends
func (h *Hub) Broadcast(data []MarketRow) {
	h.mu.Lock()
	defer h.mu.Unlock()

	for client := range h.clients {
		if err := client.WriteJSON(data); err != nil {
			client.Close()
			delete(h.clients, client)
		}
	}
}