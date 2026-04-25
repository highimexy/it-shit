package twitter

import "sync"

// Cache provides a thread-safe in-memory store for tweets
type Cache struct {
	mu     sync.RWMutex
	tweets []Tweet
}

func NewCache() *Cache {
	return &Cache{
		tweets: []Tweet{},
	}
}

// Set overwrites the current cache safely (blocks readers)
func (c *Cache) Set(newTweets []Tweet) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.tweets = newTweets
}

// Get reads the current cache safely (allows concurrent readers)
func (c *Cache) Get() []Tweet {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return c.tweets
}