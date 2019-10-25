import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './registration';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Logo from '../stockUP-logo-white.png';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(first_name, last_name, username, password) {
    axios.post('/registerUser', {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password
    })
    .then((reg) => {
      console.log(res);
    })

  }



  render() {
    return (
      <div className="App">
        <Router>
  
          <Link style={{ textDecoration: 'none'}} to={'/'}>
            <h2 className="header">
              StockUP.
            </h2>
          </Link>
          <Register/>
          
          <Suspense fallback={<div/>}>
            <Switch>
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
