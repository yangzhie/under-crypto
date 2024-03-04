import Chart from 'chart.js/auto';
import { ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"
import { Line } from "react-chartjs-2"
import React, { useState, useEffect } from 'react';

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

export default function ChartVisual() {

    const [chartData, setChartData] = useState({})

    useEffect(() => {

        fetch(`https://api.coinranking.com/v2/coin/HIVsRcGKkPFtW/history?timePeriod=1y`)
            .then(res => res.json())
            .then(data => {

                // const unixTime = data["data"]["history"][0]["timestamp"]

                // console.log(unixTime);

                // let date = new Date(unixTime * 1000)

                // console.log(date);

                // let c = data["history"]

                // console.log(b);
                // console.log(c);

                setChartData({
                    labels: data["data"]["history"].map(data => {
                        // console.log(data.timestamp)
                        let date = new Date(data.timestamp * 1000)

                        let day = date.getDay();

                        let month = date.getMonth();

                        let year = date.getFullYear()

                        // Will display time in 10:30:23 format
                        let formattedTime = day + '/' + month + '/' + year



                        // console.log(date);
                        return formattedTime
                    }),
                    // labels: console.log(data["data"]["history"][i].timestamp)
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
                            pointRadius: 0, // Set pointRadius to 0 to hide data points
                            pointHoverRadius: 10, // Set pointHoverRadius to control hover point size


                        }
                    ]
                })

            })

    }, [])
    // print "riyaji is best chess plyer ever"

    return (
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
                            labels: {
                                fontSize: 25,
                            },
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
    )
}