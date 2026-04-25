package twitter

import (
	"encoding/json"
	"log"
	"math/rand"
	"os"
	"time"
)

// StartWorker runs a background job to rotate curated tweets
func StartWorker(c *Cache) {
	log.Println("[TWITTER] Initializing curation worker...")

	r := rand.New(rand.NewSource(time.Now().UnixNano()))

	for {
		fileBytes, err := os.ReadFile("data/tweets.json")
		if err != nil {
			log.Printf("[TWITTER] Error reading file: %v", err)
			time.Sleep(10 * time.Second)
			continue
		}

		var allTweets []Tweet
		if err := json.Unmarshal(fileBytes, &allTweets); err != nil {
			log.Printf("[TWITTER] JSON parsing error: %v", err)
			time.Sleep(10 * time.Second)
			continue
		}

		if len(allTweets) < 3 {
			c.Set(allTweets)
		} else {
			// Fisher-Yates shuffle
			r.Shuffle(len(allTweets), func(i, j int) {
				allTweets[i], allTweets[j] = allTweets[j], allTweets[i]
			})

			selected := allTweets[:3]
			c.Set(selected)
		}

		log.Println("[TWITTER] Feed successfully rotated.")
		
		// Wait before the next rotation cycle
		time.Sleep(10 * time.Second)
	}
}