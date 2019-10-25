import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './registration';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Button href={'/register'}  className="register-button" block size='lg' variant="outline-light">
          Register
        </Button>

        <Suspense fallback={<div/>}>
          <Switch>
            <Route exact={true} path={'/'}>
              <div>Home</div>
            </Route>

            <Route exact={true} path={'/register'} component={Register}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
