"use client"

import { useState, useEffect } from 'react';

// Components
import Overview from './components/Overview';
import Holdings from './components/Holdings';
import Assets from './components/Assets';
import Values from './components/Values';


// Snapshot Data
// const marketSnapshot = require('./snapshots/markets.json')
import marketSnapshot from './snapshots/markets.json';
import tokensSnapshot from './snapshots/tokens.json';
import pricesSnapshot from './snapshots/prices.json';

export default function Home() {
  const [account, setAccount] = useState(null)

  const [trackedTokens, setTrackedTokens] = useState([])

  const [markets, setMarkets] = useState(null)
  const [tokens, setTokens] = useState([])

  const getMarkets = async () => {
    // TODO: Make API call to fetch market data
    // Use snapshot for now
    setMarkets(marketSnapshot)
  }

  const getToken = async () => {
    // Fetch token info and sew it together
    const id = trackedTokens[trackedTokens.length - 1]
    
    // Market data
    const market = markets.find((market) => market.id === id)

    // Token details
    const tokenSnapshot = tokensSnapshot.find((token) => token.id === id)
    const details = tokenSnapshot.detail_platforms.ethereum

    // Prices
    const prices = pricesSnapshot[id]

    // Balances
    const balanceSnapshot = {
      'ethereum': 0.012862445262358626,
      'usd-coin': 41.65432,
      'tether': 1.001
    }

    const balance = balanceSnapshot[id]
    
    // Token object
    const token = {
      id: id,
      market: market,
      address: details ? details.contract_address : null,
      prices: prices ? prices : [], 
      balance: balance ? balance : 0,
      value: market.current_price * balance
    }

    setTokens([...tokens, token])
  }
  
  useEffect(() => {
    console.log("Load up data here...")
    if (!markets) {
      getMarkets();
    }

    if(trackedTokens.length !== 0) {
      getToken()
    }
  }, [trackedTokens])


  return (
    <main>
      <h2>Portfolio Overview</h2>

      <Overview 
        account={account} 
        setAccount={setAccount}
        markets={markets}
        trackedTokens={trackedTokens}
        setTrackedTokens={setTrackedTokens}
        tokens={tokens}
      />

      <div className="details">
        <div className="divider"></div>
          
          <Holdings />          

          <Values />
          
          <Assets />
          
      </div>
    </main>
  );
}