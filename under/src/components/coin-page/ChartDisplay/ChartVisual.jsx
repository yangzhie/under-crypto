import React, { useState, useEffect } from 'react'

import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'

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
    const [range, setRange] = useState('1h')

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/history?timePeriod=${range}`)
            .then((res) => res.json())
            .then((data) => {
                const gradient = document.createElement('canvas').getContext('2d').createLinearGradient(0, 0, 0, 1100)
                gradient.addColorStop(1, 'rgba(0,0,0,1)') // Black
                gradient.addColorStop(0.33, 'rgba(255, 197, 47, 0.8)') // Traversing through different orange shades
                gradient.addColorStop(0.66, 'rgba(255, 209, 89, 0.8)')
                gradient.addColorStop(0, 'rgba(255, 219, 125, 0.8)') // Orange

                setChartData({
                    labels: data['data']['history'].map((data) => {
                        let date = new Date(data.timestamp * 1000)

                        let formattedTime

                        if (range === '30d') {
                            formattedTime = date.toLocaleDateString()
                        } else if (range === '5y') {
                            formattedTime = date.getFullYear().toString()
                        } else if (range === '1h' || '24h') {
                            let second = date.getSeconds()
                            let minute = date.getMinutes() + 1
                            let hour = date.getHours()
                            formattedTime = `${hour}:${minute}:${second}`
                        } else {
                            let day = date.getDate()
                            let month = date.getMonth() + 1
                            let year = date.getFullYear()
                            formattedTime = `${day}/${month}/${year}`
                        }

                        return formattedTime
                    }),
                    datasets: [
                        {
                            label: 'Price',
                            data: data['data']['history'].map((data) => data.price),
                            fill: true,
                            backgroundColor: gradient,
                            borderColor: 'rgba(0, 0, 0, 0)',
                            pointRadius: 0,
                            pointHoverRadius: 10,
                        },
                    ],
                });
            })
    }, [coinId, range])

    return (
        <>
            <select onChange={(e) => setRange(e.target.value)} value={range}>
                <option value="1h">1h</option>
                <option value="24h">24h</option>
                <option value="7d">7d</option>
                <option value="30d">30d</option>
                <option value="1y">1y</option>
                <option value="5y">5y</option>
            </select>

            <div style={{ width: '1400px', height: '1000px' }}>
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
                                    },
                                },
                                y: {
                                    ticks: {
                                        beginAtZero: true,
                                        callback: function (value) {
                                            return "$" + value
                                        }
                                    },
                                    grid: {
                                        display: false,
                                    },
                                },
                            },
                            legend: {
                                display: false,
                            },
                            responsive: true,
                            plugins: {
                                legend: { display: false },
                                title: { display: true, text: 'Price' },
                            },
                        }}
                    />
                )}
            </div>
        </>
    );
}
