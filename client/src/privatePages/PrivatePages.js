import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PrivateNav from './privateNav';
import Trade from './trade/Trade'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class PrivatePages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        axios.get('/loggedIn')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    handleLogout() {
        axios.get('/logout')
            .then((res) => {
                window.location.href = '/';
            })
            .catch((err) => {
                console.log(err);
            });
    }






    render() {
        return (
            <Router>
                <PrivateNav handleLogout={this.handleLogout}/>
                <Route exact={true} path={'/trade'}>
                    <Trade/>
                </Route>
            </Router>
        );
    }
}

export default PrivatePages;
