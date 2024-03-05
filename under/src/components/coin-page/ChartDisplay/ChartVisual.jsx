import React, { useState, useEffect } from 'react'

import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2"
import { ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"

Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export default function ChartVisual({ coinId }) {

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/history?timePeriod=1y`)
            .then(res => res.json())
            .then(data => {
                setChartData({
                    labels: data["data"]["history"].map(data => {
                        let date = new Date(data.timestamp * 1000)

                        let day = date.getDay()

                        let month = date.getMonth()

                        let year = date.getFullYear()

                        let formattedTime = day + '/' + month + '/' + year

                        return formattedTime
                    }),
                    datasets: [
                        {
                            label: "Price",
                            data: data["data"]["history"].map(data => data.price),
                            fill: true,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            pointRadius: 0,
                            pointHoverRadius: 10,
                        }
                    ]
                })

            })

    }, [coinId])

    return (
        <>
            <select>
                <option value="1h">1h</option>
                <option value="24h">24h</option>
                <option value="7d">7d</option>
            </select>
            <div style={{ width: "1400px", height: "1000px" }}>
                {chartData && chartData.datasets && (
                    <Line
                        data={chartData}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    reverse: true,
                                    grid: {
                                        display: false,
                                    }
                                },
                                y: {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                    grid: {
                                        display: false,
                                    }
                                },
                            },
                            legend: {
                                display: false
                            },
                            responsive: true,
                            plugins: {
                                legend: { position: "top" },
                                title: { display: true, text: "Price" }
                            }
                        }}
                    />
                )}
            </div>
        </>
    )
}