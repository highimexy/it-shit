package twitter

import "sync"

// Cache zarządza bezpiecznym dostępem do tweetów w pamięci
type Cache struct {
	mu     sync.RWMutex
	tweets []Tweet
}

// NewCache to konstruktor tworzący nową instancję pamięci
func NewCache() *Cache {
	return &Cache{
		tweets: []Tweet{},
	}
}

// Set bezpiecznie nadpisuje tablicę tweetów
func (c *Cache) Set(newTweets []Tweet) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.tweets = newTweets
}

// Get bezpiecznie odczytuje tablicę tweetów
func (c *Cache) Get() []Tweet {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return c.tweets
}