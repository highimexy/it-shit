package twitter

// Tweet represents the data structure for a single feed item
type Tweet struct {
	ID     string `json:"id"`
	Author string `json:"author"`
	Name   string `json:"name"`
	Time   string `json:"time"`
	Text   string `json:"text"`
	Avatar string `json:"avatar"`
}