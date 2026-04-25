package market

import (
	"fmt"
	"log"
	"math/rand"
	"sync"
	"time"
)

// Engine holds the global market state and fetches new data
type Engine struct {
	mu   sync.RWMutex
	data []MarketRow
	hub  *Hub
}

func NewEngine(hub *Hub) *Engine {
	return &Engine{
		hub: hub,
		data: []MarketRow{
			{Category: "CRYPTO", Items: []Asset{{Sym: "BTC", Price: "68230.00", Chg: "+0.0%", Up: true}, {Sym: "ETH", Price: "3450.00", Chg: "+0.0%", Up: true}}},
			{Category: "US.STK", Items: []Asset{{Sym: "NVDA", Price: "875.28", Chg: "+0.0%", Up: true}, {Sym: "AAPL", Price: "168.22", Chg: "+0.0%", Up: true}}},
			{Category: "GLB.IDX", Items: []Asset{{Sym: "NIKKEI", Price: "39836.00", Chg: "+0.0%", Up: true}, {Sym: "DAX", Price: "18261.00", Chg: "+0.0%", Up: true}}},
			{Category: "PL.STK", Items: []Asset{{Sym: "WIG20", Price: "2450.00", Chg: "+0.0%", Up: true}, {Sym: "CDR", Price: "112.40", Chg: "+0.0%", Up: true}}},
		},
	}
}

func (e *Engine) GetData() []MarketRow {
	e.mu.RLock()
	defer e.mu.RUnlock()
	return e.data
}

// Start spawns background workers for data simulation (or real API fetching later)
func (e *Engine) Start() {
	log.Println("[MARKET ENGINE] Booting up data streams...")

	for {
		time.Sleep(2 * time.Second)

		e.mu.Lock()
		for i := range e.data {
			for j := range e.data[i].Items {
				item := &e.data[i].Items[j]
				change := (rand.Float64() * 0.4) - 0.2
				item.Up = change >= 0

				sign := ""
				if item.Up {
					sign = "+"
				}
				item.Chg = fmt.Sprintf("%s%.2f%%", sign, change)
			}
		}
		// Zabezpieczamy referencję do wysłania
		currentData := e.data
		e.mu.Unlock()

		// Rozgłaszamy do wszystkich
		e.hub.Broadcast(currentData)
	}
}