import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './key';
import { Line, defaults } from 'react-chartjs-2';
defaults.global.defaultFontFamily = 'Impact, fantasy';
import './MainGraph.css';

class LineGraph extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            graphSymbol: ''
        }
        this.getFormattedDate = this.getFormattedDate.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }


    componentDidMount() {
        this.getInfo('FB');
    }
    
    getInfo(symbol) {
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${symbol}.json?start_date=2018-01-01&end_date=2019-01-01&api_key=${API_KEY}`)
        .then(({ data }) => {
            this.setState({data: data.dataset.data})
        })
        .catch((err) => {
            console.log(err)
        });
    }

    getFormattedDate(date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];

        // var year = String(date.getFullYear()).slice(-2);
        var month = date.getMonth();
        month = months[month];

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return month + ' ' + day;
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
        
        let orderedData = this.state.data.reverse();
        orderedData.map((entry) => {
            options.labels.push(this.getFormattedDate(new Date(entry[0])))
            options.datasets[0].data.push(entry[1])
        })
    

        return (
            <div className="graph-container">
                <div className="title">Stock</div>
                <Line
                    data={options}
                    options={{
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                />
            </div>
        );
    }
}


export default LineGraph;