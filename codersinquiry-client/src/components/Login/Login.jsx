import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    
    return (
        <div className='login_container'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
<<<<<<< HEAD
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
=======
                    <Form.Control type="email" placeholder="Enter email..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password..." />
>>>>>>> ad6bda7b4899e9e4294a71a1ed447cad42f02f77
                </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;