"use client"

import { useState } from 'react';
import Overview from './components/Overview';

export default function Home() {
  const [account, setAccount] = useState(null)

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
