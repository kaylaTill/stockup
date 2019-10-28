import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = 't7V6zWDxHvWkYYdxXzEN';
import { Line } from 'react-chartjs-2';


class LineGraph extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            data: []
           
        }
        // this.getPoints = this.getPoints.bind(this);
    }

   

    // getPoints() {
    //     this.state.data.map((entry) => {
    //         this.state.series[0].data.push([entry[0], entry[1]])
    //     })
    // }
    
    
    componentDidMount() {
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${'FB'}.json?start_date=2018-01-01&end_date=2019-01-01&api_key=${API_KEY}`)
        .then(({ data }) => {
            this.setState({data: data.dataset.data})
        })
        .catch((err) => {
            console.log(err)
        });
    }
    
    
    render() {
        
        const options = {
            labels: [],
            datasets: [
                {
                    label: 'Price (Open)',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'background-color: rgb(27, 27, 27);',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: []
                }
            ]
        }
        
        this.state.data.map((entry) => {
            options.labels.push(entry[0])
            options.datasets[0].data.push(entry[1])
        })

        return (
            <div>
                <Line
                    data={options}
                    options={{
                        title: {
                            display: true,
                            text: 'Stock',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}



export default LineGraph;