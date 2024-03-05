import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

import LandingPage from './components/landing-page/LandingPage.jsx'
import CoinPage from './components/coin-page/CoinPage.jsx'

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/coin/:coinId' element={<CoinPage />} />
      </Routes>

    </>
  )
}

export default App