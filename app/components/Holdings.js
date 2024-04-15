import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false});
const Holdings = ({ tokens }) => {

  const defaulSymbols = ["---", "---", "---", "---", "---"]
  const defaultBalances = [15.5, 70.1, 35.89, 25, 100.9]

  const [symbols, setSymbols ] = useState(null)
  const [balances, setBalances ] = useState(null)

  const calculateValue = () => {     
    let syms = []
    let bals = []

    for (var i = 0; i < tokens.length; i++) {
      syms.push(tokens[i].market.symbol.toUpperCase())
      bals.push(tokens[i].balance)
    }
    setSymbols(syms)  
    setBalances(bals)  
  }

  useEffect(() => {
    if (tokens.length === 0) {
      setSymbols(null)
    } else {
      setSymbols([])
      calculateValue()
    }
  }, [tokens])

    return (
       <div className="holdings">
        <h3 className="holdings__title">Asset Holdings</h3>
        <div className="holdings__chart">

          {console.log(tokens)}

          <Chart 
            options={{
              labels: symbols ? symbols : defaulSymbols,
              legend: {
                position: 'left',
                horizontalAlign: 'center',
                labels: {
                  fontSize: '48px',
                  fontWeight: 'bold',
                  colors: '#ffffff'
                }
              }
            }} 
            series={balances ? balances : defaultBalances} 
            type="pie" 
            height={300} 
          />

        </div>       
      </div> 
    )
}

export default Holdings;