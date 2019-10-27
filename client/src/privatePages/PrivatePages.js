import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PrivateNav from './privateNav';
import Trade from './trade/Trade';
import Buy from './buy/Buy';
import Quote from './quote/Quote';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import API_KEY from '../key';

class PrivatePages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.buyStock = this.buyStock.bind(this);
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

    buyStock() {
        console.log('bout');
    }






    render() {
        return (
            <Router>
                <PrivateNav handleLogout={this.handleLogout}/>
                <Switch fallback={<div></div>}>
                    <Route exact={true} path={'/trade'}>
                        <Trade/>
                    </Route>

                    <Route exact={true} path={'/quote'}>
                        <Quote getQuote={this.getQuote} />
                    </Route>

                    <Route exact={true} path={'/buy'}>
                        <Buy buyStock={this.buyStock}/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default PrivatePages;
