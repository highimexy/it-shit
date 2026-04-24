package twitter

import (
	"log"
	"time"
)

// StartWorker uruchamia nieskończoną pętlę pobierającą dane
func StartWorker(c *Cache) {
	log.Println("[TWITTER WORKER] Inicjalizacja...")

	for {
		// Mockowane dane - w przyszłości tu będzie zapytanie HTTP
		mockData := []Tweet{
			{ID: "1", Author: "@sama", Name: "Sam Altman", Time: "1h", Text: "AGI is closer than we think. The scaling laws hold. Keep building and adapting."},
			{ID: "2", Author: "@swyx", Name: "Shawn @ swyx.io", Time: "3h", Text: "AI engineering is the new frontend. If you only know React in 2026, you are competing with machines."},
			{ID: "3", Author: "@ThePrimeagen", Name: "ThePrimeagen", Time: "5h", Text: "VIM is not a text editor. It is a way of life. Also, stop using any-types in TypeScript."},
		}

		// Zapis do bezpiecznego cache'u
		c.Set(mockData)
		log.Println("[TWITTER WORKER] Pamięć zaktualizowana. Usypiam.")

		// Interwał pobierania
		time.Sleep(15 * time.Minute)
	}
}