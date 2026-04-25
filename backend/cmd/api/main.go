package main

import (
	"log"
	"net/http"

	"github.com/highimexy/it-shit/backend/internal/market"
	"github.com/highimexy/it-shit/backend/internal/twitter"
)

func main() {
	log.Println("[SYSTEM] Booting up...")

	// --- TWITTER MODULE ---
	tweetCache := twitter.NewCache()
	go twitter.StartWorker(tweetCache)

	// --- MARKET MODULE (WebSockets) ---
	marketStreamer := market.NewStreamer()
	go marketStreamer.StartMarketEngine()

	// --- ROUTING ---
	mux := http.NewServeMux()
	
	mux.HandleFunc("GET /api/v1/tweets", twitter.NewHandler(tweetCache))
	mux.HandleFunc("/ws/market", marketStreamer.HandleConnection)

	port := ":8080"
	log.Printf("[SYSTEM] API listening on port %s", port)
	
	if err := http.ListenAndServe(port, mux); err != nil {
		log.Fatalf("[FATAL] Server crashed: %v", err)
	}
}