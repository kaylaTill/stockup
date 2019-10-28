import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = 't7V6zWDxHvWkYYdxXzEN';
var CanvasJSReact = require('./canvasjs-2.3.2/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        this.state.data.map((entry) => {
            options.data[0].dataPoints.push([entry[0], entry[1]])
        })

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2", // "light1", "dark1", "dark2"
            title: {
                text: 'Stock'
            },
            axisY: {
                title: "Price (Open)",
                includeZero: false,
                prefix: "$"
            },
            axisX: {
                title: "Week of Year",
                interval: 2
            },
            data: [{
                type: "line",
                toolTipContent: "Week {x}: {y}%",
                dataPoints: []
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
            </div>
        );
    }
}



export default LineGraph;