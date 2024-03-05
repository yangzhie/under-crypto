import React from 'react'

import GlobalNav from './GlobalNav/GlobalNav.jsx'
import VideoContainer from './VideoContainer/VideoContainer.jsx'
import MainContent from './MainContent/MainContent.jsx'
import CryptoList from './CryptoList/CryptoList.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Help from './Help/Help.jsx'
import Blockchain from './BlockChain/Blockchain.jsx'
import Footer from './Footer/Footer.jsx'

function LandingPage() {
    return (
        <>
            <GlobalNav />
            <VideoContainer />
            <MainContent />
            <CryptoList />
            <Reviews />
            <Blockchain />
            <Help />
            <Footer />
        </>
    )
}

export default LandingPage