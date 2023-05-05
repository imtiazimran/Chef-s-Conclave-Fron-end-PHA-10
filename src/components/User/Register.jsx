import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../CustomHooks/useTitle';

const Register = () => {
    const { googleSingIn, githubSingIn, createUser, updateProfileInfo } = useContext(AuthContext)
    useTitle("Register")
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const handleSubmition = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        createUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                toast.success(`Succesfully Created User As ${loggedUser.email}`)
                
            })
            .catch(error => {
                if (error.code === 'auth/weak-password') {
                    toast.error('Password must be at least 6 characters long');
                } else if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email address is already in use');
                } else {
                    toast.error('An error occurred, please try again later');
                }
            });

        updateProfileInfo(name, photoURL)

    }


    const continueWithGoogle = () => {
        googleSingIn()
            .then(res => {
                const loggedUser = res.user;
                toast.success(`Succesfully Created User As ${loggedUser.email}`)
            })
            .catch(error => {
                toast.error('An error occurred, please try again later');
            });
    }

    const continueWithGithub = () => {
        githubSingIn()
            .then(res => {
                const loggedUser = res.user;
                toast.success(`Succesfully Created User As ${loggedUser.email}`)
            })
            .catch(error => {
                toast.error('An error occurred, please try again later');
            });
    }
    return (
        <div>
            <Form onSubmit={handleSubmition}>

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password'  type={showPassword ? "text" : "password"} placeholder="Password" required />
                    <small className='text-danger p-2' onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"} Password</small>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Input Photo URL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button> <br />
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <Button onClick={continueWithGoogle} className='my-3 fs-4' variant="outline-warning"><Icon icon="mdi:google" /></Button>
                    <Button onClick={continueWithGithub} className='my-3 fs-4' variant="outline-dark"><Icon icon="mdi:github" /></Button>
                </div>
                <p>Already Have an Account? <Link to='/login'>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;