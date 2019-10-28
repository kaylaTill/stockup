import React from 'react';
import axios from 'axios';
const API_KEY = 't7V6zWDxHvWkYYdxXzEN';

class AreaChart extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            series: [],
            volume: []
        }
    }

    componentDidMount() {
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${'FB'}.json?start_date=2018-01-01&end_date=2019-01-01&api_key=${API_KEY}`)
        .then(({data}) => {
            console.log()
            this.setState({series: data})
        })
    }


    render() {
        return (
            <div id="chart">
                shdjhslkjdk
            </div>
        );
    }
}


export default AreaChart