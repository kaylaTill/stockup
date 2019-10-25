import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './registration';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Button href={'/register'}/>



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
