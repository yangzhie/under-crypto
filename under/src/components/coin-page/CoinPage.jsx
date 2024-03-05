import React from 'react'
import { useParams } from 'react-router-dom'

import GlobalNavBar from '../landing-page/GlobalNav/GlobalNav'
import ChartDisplay from './ChartDisplay/ChartDisplay'
import NewsSection from './NewsSection/NewsSection'
import SideBar from './SideBar/SideBar'

import './CoinPageGlobal.css'

function CoinPage() {

    const { coinId } = useParams()

    return (
        <>
            <GlobalNavBar />

            <div className="wrapper">
                <div className="left-column">
                    <ChartDisplay coinId={coinId} />
                    <NewsSection />
                </div>

                <div className="right-column">
                    <SideBar coinId={coinId} />
                </div>
            </div>
        </>
    )
}

export default CoinPage