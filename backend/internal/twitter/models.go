package twitter

type Tweet struct {
	ID     string `json:"id"`
	Author string `json:"author"`
	Name   string `json:"name"`
	Time   string `json:"time"`
	Text   string `json:"text"`
}