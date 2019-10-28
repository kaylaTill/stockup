import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PrivateNav from './privateNav';
import Trade from './trade/Trade';
import Buy from './buy/Buy';
import Quote from './quote/Quote';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  './PrivatePages.css';
import API_KEY from '../key';
import { Button } from 'react-bootstrap';

class PrivatePages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true,
            stocks: [],
            balance: 0.00
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

        axios.get('/balance')
            .then(({ data }) => {
                this.setState({
                    balance: data
                })
            })
            .catch((err) => {
                console.log(err)
            });
            
        axios.get('/user-stock')
            .then(({ data }) => {
                this.setState({
                    stocks: data
                })
            })
            .catch((err) => {
                console.log(err)
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

    buyStock(symbol, companyName, price, shares) {
        console.log(this.state.balance - ((price * shares) * 1.00))
        axios.post('/buy-stock', {
            symbol: symbol,
            companyName: companyName,
            price: price,
            shares: shares,
            balance: this.state.balance - ((price * shares) * 1.00)
        })
        .then((res) => {
            console.log(res)
            window.location.href = '/congratulations'
        })
        .catch((err) => {
            console.log(err)
        });
    }

    render() {
        // console.log(this.state.stocks)
        return (
            <Router>
                <PrivateNav handleLogout={this.handleLogout}/>

                <Switch fallback={<div></div>}>
                    <Route exact={true} path={'/'}>
                        
                    </Route>
                    <Route exact={true} path={'/trade'}>
                        <Trade stocks={this.state.stocks} balance={this.state.balance}/>
                    </Route>

                    <Route exact={true} path={'/quote'}>
                        <Quote getQuote={this.getQuote} buyStock={this.buyStock} />
                    </Route>

                    <Route exact={true} path={'/buy'}>
                        <Buy buyStock={this.buyStock}/>
                    </Route>

                    <Route path={'/congratulations'}>
                        <div>
                            <Button block size='sm' 
                                variant="outline-light"
                                href={'/trade'}>
                                Congratulations, see your newly bout stock here
                            </Button>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default PrivatePages;
