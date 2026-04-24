package main

import (
	"log"
	"net/http"

	"github.com/highimexy/it-shit/backend/internal/market"
	"github.com/highimexy/it-shit/backend/internal/twitter"
)

func main() {
	log.Println("[SYSTEM] Booting up...")

	// --- MODUŁ TWITTERA ---
	tweetCache := twitter.NewCache()
	go twitter.StartWorker(tweetCache)

	// --- MODUŁ GIEŁDOWY (WebSockets) ---
	marketStreamer := market.NewStreamer()
	go marketStreamer.StartMarketEngine() // Odpalamy silnik w tle

	// --- ROUTING ---
	mux := http.NewServeMux()
	
	// REST API dla Telefonu
	mux.HandleFunc("GET /api/v1/tweets", twitter.NewHandler(tweetCache))
	
	// WebSocket dla Terminala
	mux.HandleFunc("/ws/market", marketStreamer.HandleConnection)

	port := ":8080"
	log.Printf("[SYSTEM] API listening on port %s", port)
	if err := http.ListenAndServe(port, mux); err != nil {
		log.Fatalf("[FATAL] Server crashed: %v", err)
	}
}