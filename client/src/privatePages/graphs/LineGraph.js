import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './key';
import { Line, defaults } from 'react-chartjs-2';
defaults.global.defaultFontFamily = 'Impact, fantasy';
import './LineGraph.css';
import { Form, Button, Collapse } from 'react-bootstrap';

class LineGraph extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            value: '',
            data: [],
            open: false
        }
        this.getFormattedDate = this.getFormattedDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        this.getInfo(event.target.value);
    }

    getInfo(symbol) {
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${symbol}.json?start_date=2018-01-01&end_date=2019-01-01&api_key=${API_KEY}`)
            .then(({ data }) => {
                this.setState({ data: data.dataset.data.reverse() })
            })
            .catch((err) => {
                this.setState({data: []})
            });
    }

    


    getFormattedDate(date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        var month = date.getMonth();
        month = months[month];

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return month + ' ' + day;
    }


    
    render() {
        let options = {
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
        if (this.state.value.length >= 1) {
            this.state.data.map((entry) => {
                options.labels.push(this.getFormattedDate(new Date(entry[0])))
                options.datasets[0].data.push(entry[1])
            })
        }
        
        return (
            <div>
                <div className="graph-container">
                    <div className="title">{`${this.state.value.toUpperCase()} Stock`}</div>
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
                <br></br>
                <div className="search">
                    <Button className="search-button"
                        block size='sm' variant="outline-light"
                        onClick={() => { this.setState({ open: !this.state.open }) }}
                        aria-controls="search-collapse"
                        aria-expanded={this.state.open}
                    >Search Symbol Stock
                    </Button>

                    <Collapse in={this.state.open}>
                        <Form id="search-collapse" onSubmit={this.handleSubmit}>
                            <Form.Control
                                name="symbol"
                                className="symbol"
                                autoComplete="off"
                                placeholder="Symbol"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </Form>
                    </Collapse>
                </div>
            </div>

        );
    }
}


export default LineGraph;