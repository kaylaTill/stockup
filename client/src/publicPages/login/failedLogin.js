import React, { Suspense } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './failed.css';

const LoginFailure = (props) => {
    return (
        <div className="failed">
            <div className="failed">
                Uh oh, we couldn't find an account under that username and password,
                please try again or register a new account.
            </div>
            <Button 
                className="try-again"
                block size='lg' 
                variant="outline-light" 
                onClick={(() => window.location.href = '/')}>
                Try Again
            </Button>
        </div>
    );
};

export default LoginFailure;