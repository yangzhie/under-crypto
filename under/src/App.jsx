import './App.css'
import NavBar from './components/NavBar.jsx'
import GlobalNav from './components/GlobalNav.jsx'
import VideoContainer from './components/VideoContainer.jsx'
import MainContent from './components/MainContent.jsx'
import CryptoList from './components/CryptoList.jsx'
import Reviews from './components/Reviews.jsx'
import Help from './components/Help.jsx'
import Blockchain from './components/Blockchain.jsx'
import Footer from './components/Footer.jsx'

import ChartDisplay from './components/coin-page/ChartDisplay.jsx'
import NewsSection from './components/coin-page/NewsSection.jsx'
import SideBar from './components/coin-page/SideBar.jsx'

function App() {

  return (
    <>

      {/* <GlobalNav />
      <VideoContainer />
      <MainContent />
      <CryptoList />
      <Reviews />
      <Blockchain />
      <Help />
      <Footer /> */}

      <ChartDisplay />


    </>
  )
}

export default App