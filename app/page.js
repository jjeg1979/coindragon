"use client"

import { useState } from 'react';

// Components
import Overview from './components/Overview';

// Snapshot Data
import marketSnapshot from './snapshots/markets.json'

export default function Home() {
  const [account, setAccount] = useState(null)

  const [markets, setMarkets] = useState(marketSnapshot)

  return (
    <main>
      <h2>Portfolio Overview</h2>

      <Overview account={account} setAccount={setAccount}/>

      <div className="details">
        <div className="divider"></div>
      </div>
    </main>
  )
}
