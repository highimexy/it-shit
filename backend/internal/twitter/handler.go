package twitter

import (
	"encoding/json"
	"net/http"
)

// NewHandler tworzy endpoint, wstrzykując do niego zależność w postaci Cache
func NewHandler(c *Cache) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		
		// CORS (do lokalnego testowania z Next.js)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")

		// Pobieramy dane przez bezpieczną metodę Get()
		tweets := c.Get()

		// Wysyłamy JSON do klienta
		if err := json.NewEncoder(w).Encode(tweets); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
	}
}