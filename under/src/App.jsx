import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import LandingPage from './components/landing-page/LandingPage.jsx'
import CoinPage from './components/coin-page/CoinPage.jsx'
import WatchlistPage from './components/watchlist-page/WatchlistPage.jsx'

import './App.css'

function App() {

  // let storedCoins = JSON.parse(localStorage.getItem('watchlist'))

  const [coins, setCoins] = useState([])

  function onDelete(coin) {
    let filter = coins.filter(coins => coins !== coin)
    setCoins(filter)
    localStorage.setItem('watchlist', JSON.stringify(filter))
  }

  function onAdd(coin) {
    setCoins([coin, ...coins])
    localStorage.setItem('watchlist', JSON.stringify([coin, ...coins]))
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/coin/:coinId' element={<CoinPage onAdd={onAdd} />} />
        <Route path="/watchlist" element={<WatchlistPage coins={coins} onDelete={onDelete} />} />
      </Routes>
    </>
  )
}

export default App