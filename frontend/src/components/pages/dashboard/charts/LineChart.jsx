import moment from "moment"
import React, { Component } from "react"
import { Line } from "react-chartjs-2"

class LineChart extends Component {
    
    state = {
        starting: moment().subtract(1, "month").format("MMM DD"),
        ending: moment().format("MMM DD"),
        data: [
            {
                x: new Date(),
                y: 10
            },
            {
                t: new Date(),
                y: 10
            }
        ]
    }
    render() {
        var startDate = moment().format("YYYY-MM-DD")
        var endDate = moment().format("YYYY-MM-DD")

        const data = {
            labels: [startDate, endDate],
            datasets: [
                {
                    label: "Branch Name",
                    fill: false,
                    lineTension: 0.2,
                    backgroundColor: "rgb(255,20,147)",
                    borderColor: "rgb(255,20,147)",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.data
                }
            ]
        }

        const lineOptions = {
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 100,
                            suggestedMax: 0
                        }
                    }
                ],
                yAxes: [
                    {
                        type: "time",
                        time: {
                            unit: "year",
                            tooltipFormat: "lll"
                        },
                        ticks: {
                            maxTicksLimit: 2
                        }
                    }
                ]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: true
            }
        }
        return <Line data={data} options={lineOptions} />
    }
}

export default LineChart
