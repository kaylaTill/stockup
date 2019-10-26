import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PrivateNav from './privateNav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class PrivatePages extends React.Component {
    constructor(props) {
        super(props)
        
    }



    render() {
        return (
            <Router>
                <div className="PrivatePages">
                    <PrivateNav/>
                </div>
            </Router>
        );
    }
}

export default PrivatePages;
