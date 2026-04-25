package twitter

import (
	"encoding/json"
	"net/http"
)

// NewHandler injects the cache dependency into the HTTP handler
func NewHandler(c *Cache) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// CORS & Headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")

		// Fetch from memory
		tweets := c.Get()

		// Encode to JSON and send
		if err := json.NewEncoder(w).Encode(tweets); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
	}
}