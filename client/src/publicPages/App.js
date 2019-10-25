import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Logo from '../stockUP-logo-white.png';
import Register from './registration/registration';
import Login from './login/login'
import axios from 'axios';
import LoginFailure from './login/failedLogin';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)


    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleRegister(first_name, last_name, username, password) {
    axios.post('/registerUser', {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      loginFailed: false
    })
    .then(() => {
      window.location.reload(false);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleLogin(username, password) {
    axios.post('/login', {
      username: username,
      password: password
    })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((error) => {
        window.location.href = '/login-failed'
      });
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
          <Register handleRegister={this.handleRegister}/>
          <Login handleLogin={this.handleLogin}/>

          <Suspense fallback={<div/>}>
            <Switch>
              <Route exact={true} path={'/register'}>
                <Register handleRegister={this.handleRegister}/>
              </Route>

              <Route exact={true} path={'/login-failed'}>
                <LoginFailure/>
              </Route>

            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
