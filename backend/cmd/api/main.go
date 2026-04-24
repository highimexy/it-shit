package main

import (
	"log"
	"net/http"

	// Zmień ten import na właściwy dla Twojego modułu!
	"github.com/highimexy/it-shit/backend/internal/twitter"
)

func main() {
	log.Println("[SYSTEM] Booting up...")

	// 1. Inicjalizacja współdzielonej pamięci (Cache)
	tweetCache := twitter.NewCache()

	// 2. Odpalenie Workera w tle
	go twitter.StartWorker(tweetCache)

	// 3. Konfiguracja Routera (Go 1.22+)
	mux := http.NewServeMux()
	
	// Wstrzykujemy cache do handlera
	mux.HandleFunc("GET /api/v1/tweets", twitter.NewHandler(tweetCache))

	// 4. Start Serwera
	port := ":8080"
	log.Printf("[SYSTEM] API listening on port %s", port)
	if err := http.ListenAndServe(port, mux); err != nil {
		log.Fatalf("[FATAL] Server crashed: %v", err)
	}
}