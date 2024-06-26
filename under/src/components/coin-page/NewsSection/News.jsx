const apiXKey = import.meta.env.VITE_X_API_KEY

import React, { useState, useEffect } from 'react'

function News() {
    const [newsData, setNewsData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': apiXKey
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://openapiv1.coinstats.app/news?limit=5', options)
                const data = await res.json()

                const articles = data.result.map(article => {
                    const imgUrl = article.imgUrl
                    const title = article.title
                    const link = article.link
                    const author = article.source
                    const date = article.feedDate

                    const toBeFormattedDate = new Date(date * 1000)

                    const day = toBeFormattedDate.getDay()
                    const month = toBeFormattedDate.getMonth()
                    const year = toBeFormattedDate.getFullYear()

                    const formattedDate = day + '/' + month + '/' + year

                    return { imgUrl, title, link, author, formattedDate }
                })
                setNewsData(articles)
            } catch (error) {
                console.error(`Error fetching data: ${error}`)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {newsData.map((article, index) => (
                <a key={index} href={article.link} className="news-article">
                    <img src={article.imgUrl} alt="News" />
                    <div className="article-content">
                        <h2 className="title">{article.title}</h2>
                    </div>
                    <div className="article-footer">
                        <span>{article.author}</span>
                        <div className="vert-line" style={{ marginRight: "10px", marginLeft: "10px" }}>|</div>
                        <span>{article.formattedDate}</span>
                    </div>
                </a>
            ))}
        </>
    );
}

export default News;
