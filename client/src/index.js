import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './publicPages/App';
import * as serviceWorker from './serviceWorker';
import PrivatePages from './privatePages/PrivatePages';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


const loggedIn = (() => {
    axios.get('/loggedIn')
        .then((response) => {
            ReactDOM.render(
                <BrowserRouter>
                    <PrivatePages />
                </BrowserRouter>,
                document.getElementById('root')
            )
        })
        .catch((err) => {
            ReactDOM.render(
       
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.getElementById('root')
            );
        })
});

loggedIn();

serviceWorker.unregister();
