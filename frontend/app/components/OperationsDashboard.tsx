'use client'

import { Container } from '../wrappers/Container'
import { FiTerminal } from 'react-icons/fi'
import { useState, useEffect } from 'react'

interface Tweet {
  id: string
  author: string
  name: string
  time: string
  text: string
}

interface Asset {
  sym: string
  price: string
  chg: string
  up: boolean
}

interface MarketRow {
  category: string
  items: Asset[]
}

export function OperationsDashboard() {
  // --- STATE ---
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [markets, setMarkets] = useState<MarketRow[]>([])
  const [wsStatus, setWsStatus] = useState<'CONNECTING' | 'CONNECTED' | 'DISCONNECTED'>(
    'CONNECTING'
  )

  // --- TWITTER LOGIC (REST API) ---
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/v1/tweets')
        if (!res.ok) throw new Error('Server connection error')

        const data = await res.json()
        setTweets(data)
      } catch (error) {
        console.error('[API Error]:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Artificial delay for UI effect
    setTimeout(() => fetchTweets(), 700)
  }, [])

  // --- MARKET LOGIC (WebSockets) ---
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/ws/market')

    ws.onopen = () => {
      setWsStatus('CONNECTED')
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMarkets(data)
    }

    ws.onclose = () => {
      setWsStatus('DISCONNECTED')
    }

    // Cleanup on unmount
    return () => {
      ws.close()
    }
  }, [])

  return (
    <section className="border-foreground/10 relative overflow-hidden border-b">
      <Container className="relative z-10 py-20 lg:py-32">
        {/* SIDE WATERMARKS */}

        {/* LEFT WRAPPER */}
        <div className="pointer-events-none absolute top-1/2 left-1 -z-10 hidden -translate-y-1/2 select-none lg:block">
          <div className="origin-center -rotate-90 pb-80 font-serif text-[clamp(4rem,18vw,11rem)] leading-none tracking-tighter uppercase opacity-[0.02]">
            Twitts
          </div>
        </div>

        {/* RIGHT WRAPPER */}
        <div className="pointer-events-none absolute top-1/2 right-0 -z-10 hidden -translate-y-1/2 select-none lg:block">
          <div className="origin-center rotate-90 pb-80 font-serif text-[clamp(4rem,18vw,12rem)] leading-none tracking-tighter uppercase opacity-[0.02]">
            Stocks
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-24">
          {/* LEFT PANEL - PHONE */}
          <div className="border-foreground/20 bg-foreground/5 relative flex h-150 w-70 shrink-0 flex-col rounded-[3rem] border p-3 shadow-2xl backdrop-blur-md">
            {/* Notch */}
            <div className="border-background/20 bg-foreground absolute top-5 left-1/2 z-20 h-5 w-16 -translate-x-1/2 rounded-full border" />

            {/* Back Glyphs */}
            <div className="bg-foreground/20 absolute top-24 -left-1 h-12 w-1 rounded-l-md blur-[1px]" />
            <div className="bg-foreground/20 absolute top-32 -right-1 h-20 w-1 rounded-r-md blur-[1px]" />

            {/* Screen */}
            <div className="border-foreground/10 bg-background relative flex flex-1 flex-col overflow-hidden rounded-[2.5rem] border shadow-inner">
              {/* Feed Header */}
              <div className="border-foreground/10 bg-foreground/5 border-b p-4 pt-10 text-center">
                <span className="text-foreground font-mono text-[9px] font-bold tracking-widest uppercase opacity-50">
                  AI Pulse // Live Feed
                </span>
              </div>

              {/* Feed Content */}
              <div className="hide-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto p-4">
                {isLoading ? (
                  <div className="flex h-full w-full flex-col items-center justify-center text-center opacity-40">
                    <span className="border-foreground h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></span>
                    <span className="mt-4 animate-pulse font-mono text-[10px] tracking-widest uppercase">
                      [ Establishing Uplink... ]
                    </span>
                  </div>
                ) : tweets.length > 0 ? (
                  tweets.map((tweet) => (
                    <div
                      key={tweet.id}
                      className="border-foreground/10 bg-foreground/2 flex flex-col gap-2 rounded-2xl border p-4 font-sans text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="bg-foreground/20 h-6 w-6 rounded-full" />
                          <div className="flex flex-col">
                            <span className="text-foreground text-[10px] leading-tight font-bold">
                              {tweet.name}
                            </span>
                            <span className="text-foreground text-[9px] opacity-40">
                              {tweet.author}
                            </span>
                          </div>
                        </div>
                        <span className="text-foreground font-mono text-[9px] opacity-30">
                          {tweet.time}
                        </span>
                      </div>
                      <p className="text-foreground mt-1 text-xs leading-relaxed opacity-80">
                        {tweet.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center opacity-30">
                    <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase">
                      [ Connection Failed ]
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - FINANCIAL TERMINAL */}
          <div className="flex w-full max-w-md shrink-0 flex-col lg:max-w-lg">
            <div className="border-foreground/20 bg-background flex flex-col overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md">
              <div className="border-foreground/10 bg-foreground/5 flex h-10 items-center gap-2 border-b px-4">
                <div className="h-3 w-3 rounded-full border border-red-500/30 bg-red-500/80" />
                <div className="h-3 w-3 rounded-full border border-yellow-500/30 bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full border border-green-500/30 bg-green-500/80" />
                <span className="text-foreground ml-4 flex items-center gap-2 font-mono text-[10px] opacity-50">
                  <FiTerminal /> market_board.sh
                </span>

                {/* WS Status Indicator */}
                <div className="ml-auto flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${wsStatus === 'CONNECTED' ? 'animate-pulse bg-green-500' : 'bg-red-500'}`}
                  />
                  <span className="text-foreground font-mono text-[8px] opacity-40">
                    {wsStatus}
                  </span>
                </div>
              </div>

              <div className="flex flex-col p-6 font-mono text-sm leading-relaxed">
                <div className="mb-6 flex flex-col gap-1 text-xs opacity-60">
                  <span>[!] Initializing secure WebSocket stream... OK.</span>
                  <span>[!] Fetching {markets.length || 4} data streams... OK.</span>
                  <span className="border-foreground/10 text-foreground mt-2 border-b pb-2 font-bold tracking-widest uppercase">
                    Terminal Active
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  {markets.map((row) => (
                    <div
                      key={row.category}
                      className="border-foreground/10 hover:border-foreground/30 flex flex-col gap-2 border-l-2 pl-4 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span className="text-foreground w-20 text-[10px] font-bold tracking-widest uppercase opacity-40">
                        [{row.category}]
                      </span>
                      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:gap-6">
                        {row.items.map((item) => (
                          <div key={item.sym} className="flex flex-1 justify-between gap-4 text-xs">
                            <span className="text-foreground font-bold opacity-80">{item.sym}</span>
                            <div className="flex gap-3 text-right">
                              <span className="text-foreground opacity-60">{item.price}</span>
                              <span
                                className={`w-12 animate-pulse text-right ${item.up ? 'text-green-500' : 'text-red-500'}`}
                              >
                                {item.chg}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Awaiting Payload State */}
                  {markets.length === 0 && wsStatus === 'CONNECTING' && (
                    <div className="text-xs opacity-40">Awaiting market data payload...</div>
                  )}
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs opacity-50">
                  <span>guest@tfj:~$</span>
                  <span className="bg-foreground h-4 w-2 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
