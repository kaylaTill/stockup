import React from 'react';
import axios from 'axios';
const API_KEY = 't7V6zWDxHvWkYYdxXzEN';

class AreaChart extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            selection: 'one_year',
                    options: {
                        annotations: {
                            yaxis: [{
                                y: 30,
                                borderColor: '#999',
                            }],
                            xaxis: [{
                                x: new Date('14 Nov 2012').getTime(),
                                borderColor: '#999',
                                yAxisIndex: 0,
                            }]
                        },
                        dataLabels: {
                            enabled: false
                        },
                        markers: {
                            size: 0,
                            style: 'hollow',
                        },
                        xaxis: {
                            type: 'datetime',
                            min: new Date('01 Mar 2012').getTime(),
                            tickAmount: 6,
                        },
                        tooltip: {
                            x: {
                                format: 'dd MMM yyyy'
                            }
                        },
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shadeIntensity: 1,
                                opacityFrom: 0.7,
                                opacityTo: 0.9,
                                stops: [0, 100]
                            }
                        }
                    },
                    series: [{
                        data: []
                    }]
            }
        this.getPoints = this.getPoints.bind(this);
    }


    getPoints() {
        this.state.data.map((entry) => {
            console.log([entry[0], entry[1]])
        })
    }


    componentDidMount() {
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${'FB'}.json?start_date=2018-01-01&end_date=2019-01-01&api_key=${API_KEY}`)
        .then(({ data }) => {
            console.log(data.dataset.data)
            console.log(data.dataset.data)
            this.setState({data: dataset.data})
        })
    }



    render() {
        this.getPoints()
        return (
            <div id="chart">
                shdjhslkjdk
            </div>
        );
    }
}


export default AreaChart