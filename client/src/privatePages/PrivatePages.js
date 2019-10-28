import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PrivateNav from './privateNav';
import Trade from './trade/Trade';
import Buy from './buy/Buy';
import Quote from './quote/Quote';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  './PrivatePages.css';
import API_KEY from '../key';

class PrivatePages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stocks: [],
            symbol: null,
            balance: 0.00
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.buyStock = this.buyStock.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.filterBySymbol = this.filterBySymbol.bind(this);
        this.sellStock = this.sellStock.bind(this);
        this.sellAllCompanyStock = this.sellAllCompanyStock.bind(this);
    }

    componentDidMount() {
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

    buyStock(symbol, companyName, price, shares, updateShares = 0) {
        console.log(this.state.balance - ((price * shares) * 1.00))
        axios.post('/buy-stock', {
            symbol: symbol,
            companyName: companyName,
            price: price,
            shares: shares,
            balance: (parseFloat(this.state.balance) - parseFloat(price * shares)),
            updateShares: updateShares
        })
        .then((res) => {
            console.log(res)
            window.location.href = '/buy-congratulations'
        })
        .catch((err) => {
            console.log(err)
        });
    }


    sellStock(symbol, price, shares) {
        console.log((price * shares))
        axios.post('/sell-stock', {
            symbol: symbol,
            price: price,
            shares: shares,
            balance: (parseFloat(this.state.balance) + parseFloat(price * shares))
        })
            .then((res) => {
                console.log(res)
                window.location.href = '/sell-congratulations'
            })
            .catch((err) => {
                console.log(err)
            });
    }
        
    sellAllCompanyStock() {
        axios.post('/sell-all-stock', {
            symbol: symbol,
            price: price,
            shares: shares,
            balance: this.state.balance - ((price * shares) * 1.00)
        })
            .then((res) => {
                console.log(res)
                window.location.href = '/sell-congratulations'
            })
            .catch((err) => {
                console.log(err)
            });
            
    }



    handleSearch(symbol) {
        this.setState({ symbol: symbol })
    }


    filterBySymbol() {
        if (this.state.symbol) {
            return this.state.stocks.filter(stock => stock.symbol.toLowerCase() === this.state.symbol.toLowerCase())
        } 
        return this.state.stocks;
    }


    render() {
        const stocks = this.filterBySymbol()
        return (
            <Router>
                <PrivateNav handleLogout={this.handleLogout}/>

                <Switch fallback={<div></div>}>
                    <Route exact={true} path={'/'}>
                        
                    </Route>
                    <Route exact={true} path={'/trade'}>
                        <Trade 
                            handleSearch={this.handleSearch}    
                            buyStock={this.buyStock} 
                            sellStock={this.sellStock}
                            stocks={stocks} 
                            balance={this.state.balance}
                        />
                    </Route>

                    <Route exact={true} path={'/quote'}>
                        <Quote getQuote={this.getQuote} buyStock={this.buyStock} />
                    </Route>

                    <Route exact={true} path={'/buy'}>
                        <Buy buyStock={this.buyStock}/>
                    </Route>

                    <Route path={'/buy-congratulations'}>
                        <div>
                            <Button block size='sm' 
                                variant="outline-light"
                                className="congrats"
                                href={'/trade'}>
                                Congratulations, see your newly bought stock here!
                            </Button>
                        </div>
                    </Route>

                    <Route path={'/sell-congratulations'}>
                        <div>
                            <Button block size='sm' 
                                variant="outline-light"
                                className="congrats"
                                href={'/trade'}>
                                Congratulations, see your new balance here!
                            </Button>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default PrivatePages;
