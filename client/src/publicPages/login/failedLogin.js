import React, { Suspense } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './failed.css';

const LoginFailure = (props) => {
    return (
        <div className="failed">
            <div>
                Uh oh, we couldn't find an account under that username and password,
                please try again or register a new account.
            </div>
            <Button variant="outline-secondary" onClick={(() => window.location.href = '/')}>
                Back To Home
            </Button>

            <Link to={'/register'}>
                <Button variant="outline-secondary">
                    Register Account
                </Button>
            </Link>
        </div>
    );
};

export default LoginFailure;