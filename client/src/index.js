import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './publicPages/App';
import * as serviceWorker from './serviceWorker';
import PrivatePages from './privatePages/PrivatePages';
import axios from 'axios';


const loggedIn = (() => {
    axios.get('/loggedIn')
        .then((response) => {
            ReactDOM.render(
                    <PrivatePages />,
                document.getElementById('root')
            )
        })
        .catch((err) => {
            ReactDOM.render( <App />,
                document.getElementById('root')
            );
        })
});

loggedIn();

serviceWorker.unregister();
