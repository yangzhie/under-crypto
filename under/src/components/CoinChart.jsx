import React, { useEffect, useState } from 'react';

const CoinChart = ({ coinId }) => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/history?timePeriod=1y`)
            .then(res => res.json())
            .then(data => {
                setChartData({
                    labels: data["data"]["history"].map(data => {
                        let date = new Date(data.timestamp * 1000)
                        let day = date.getDate();
                        let month = date.getMonth() + 1; // Months are zero-based
                        let year = date.getFullYear()
                        let formattedTime = `${day}/${month}/${year}`
                        return formattedTime
                    }),
                    datasets: [
                        {
                            label: "Price",
                            data: data["data"]["history"].map(data => data.price),
                            fill: true,
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.3)"
                        }
                    ]
                })
            });
    }, [coinId]);

    return (
        <>
            <div style={{ width: "1000px" }}>
                {chartData && chartData.datasets && (
                    <Line
                        data={chartData}
                        options={{
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
    );
};

export default CoinChart;
