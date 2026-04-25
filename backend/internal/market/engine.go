package market

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
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
	
	// Trap fields to prevent Go's case-insensitive JSON unmarshaler conflicts
	CloseTime   interface{} `json:"C"`
	EventTime   interface{} `json:"E"`
	PriceChange interface{} `json:"p"`
}

type FinnhubQuote struct {
	CurrentPrice float64 `json:"c"`
	ChangePrct   float64 `json:"dp"`
}

type APIAsset struct {
	QuerySymbol string
	UIDisplay   string
	CategoryIdx int
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
					{Sym: "GOLD",  Price: "...", Chg: "...", Up: true},
					{Sym: "SILVR", Price: "...", Chg: "...", Up: true},
					{Sym: "OIL",   Price: "...", Chg: "...", Up: true},
					{Sym: "NGAS",  Price: "...", Chg: "...", Up: true},
					{Sym: "COPP",  Price: "...", Chg: "...", Up: true},
					{Sym: "PLAT",  Price: "...", Chg: "...", Up: true},
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
		log.Println("[MARKET ENGINE] Finnhub key found. Starting secure data polling.")
		go e.pollFinnhubAssets(finnhubAPIKey)
	} else {
		log.Println("[MARKET WARNING] Finnhub key missing. Need key for Stocks/Commodities.")
	}
}

func (e *Engine) pollFinnhubAssets(apiKey string) {
	assetsToTrack := []APIAsset{
		// US Stocks (Category Index: 1)
		{"NVDA", "NVDA", 1},
		{"AAPL", "AAPL", 1},
		{"MSFT", "MSFT", 1},
		{"TSLA", "TSLA", 1},
		{"AMD", "AMD", 1},
		{"AMZN", "AMZN", 1},
		
		// CFD Commodities (Category Index: 2)
		{"OANDA:XAU_USD", "GOLD", 2},
		{"OANDA:XAG_USD", "SILVR", 2},
		{"OANDA:WTICO_USD", "OIL", 2},
		{"OANDA:NATGAS_USD", "NGAS", 2},
		{"OANDA:XCU_USD", "COPP", 2},
		{"OANDA:XPT_USD", "PLAT", 2},
	}

	client := &http.Client{Timeout: 8 * time.Second}
	ticker := time.NewTicker(2500 * time.Millisecond)
	defer ticker.Stop()

	for {
		now := time.Now().UTC()
		if now.Weekday() == time.Saturday || now.Weekday() == time.Sunday {
			log.Println("[MARKET ENGINE] Weekend detected. Pausing Finnhub and updating UI to dots.")
			
			e.mu.Lock()
			e.data[1].Status = "CLOSED ON WEEKENDS :C"
			e.data[2].Status = "CLOSED ON WEEKENDS :C"

			for i := range e.data[1].Items {
				e.data[1].Items[i].Price = "..."
				e.data[1].Items[i].Chg = "..."
			}
			for i := range e.data[2].Items {
				e.data[2].Items[i].Price = "..."
				e.data[2].Items[i].Chg = "..."
			}

			currentData := e.data
			e.mu.Unlock()
			
			e.hub.Broadcast(currentData)
			
			time.Sleep(1 * time.Hour)
			continue
		}

		e.mu.Lock()
		e.data[1].Status = ""
		e.data[2].Status = ""
		e.mu.Unlock()

		for _, asset := range assetsToTrack {
			<-ticker.C

			url := fmt.Sprintf("https://finnhub.io/api/v1/quote?symbol=%s&token=%s", asset.QuerySymbol, apiKey)
			resp, err := client.Get(url)
			if err != nil { continue }
			
			body, err := io.ReadAll(resp.Body)
			resp.Body.Close()
			if err != nil { continue }

			var quote FinnhubQuote
			if err := json.Unmarshal(body, &quote); err != nil { continue }
			if quote.CurrentPrice == 0 { continue }

			formattedPrice := fmt.Sprintf("%.2f", quote.CurrentPrice)
			isUp := quote.ChangePrct >= 0
			sign := ""
			if isUp { sign = "+" }
			formattedChange := fmt.Sprintf("%s%.2f%%", sign, quote.ChangePrct)

			e.mu.Lock()
			for j := range e.data[asset.CategoryIdx].Items {
				if e.data[asset.CategoryIdx].Items[j].Sym == asset.UIDisplay {
					e.data[asset.CategoryIdx].Items[j].Price = formattedPrice
					e.data[asset.CategoryIdx].Items[j].Chg = formattedChange
					e.data[asset.CategoryIdx].Items[j].Up = isUp
					break
				}
			}
			currentData := e.data
			e.mu.Unlock()

			e.hub.Broadcast(currentData)
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