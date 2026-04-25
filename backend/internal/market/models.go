package market

// Asset represents a single financial instrument
type Asset struct {
	Sym   string `json:"sym"`
	Price string `json:"price"`
	Chg   string `json:"chg"`
	Up    bool   `json:"up"`
}

// MarketRow represents a category (e.g., CRYPTO, US.STK)
type MarketRow struct {
	Category string  `json:"category"`
	Items    []Asset `json:"items"`
}