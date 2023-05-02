import { Icon } from '@iconify/react';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Form>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Input Photo URL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button> <br />
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <Button className='my-3 fs-4' variant="outline-warning"><Icon icon="mdi:google" /></Button>
                    <Button className='my-3 fs-4' variant="outline-dark"><Icon icon="mdi:github" /></Button>
                </div>
                <p>Already Have an Account? <Link to='/login'>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;