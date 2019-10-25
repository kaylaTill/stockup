import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './registration';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
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

            {/* <Route exact={true} path={'/register'} >
    
            </Route> */}

          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
