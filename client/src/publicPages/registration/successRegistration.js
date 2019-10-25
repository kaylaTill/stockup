import React, { Suspense } from 'react';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './success.css';

const RegisterSuccess = (props) => {
    return (
        <div>
            <div className="success">
                Registration Complete!
            </div>
            <Button className="to-button"
                block size='lg'
                variant="outline-light"
                onClick={(() => window.location.href = '/')}>
                    View your Page
            </Button>
        </div>
    );

};


export default RegisterSuccess;