import { Icon } from '@iconify/react';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

  const { googleSingIn, githubSingIn, signIn } = useContext(AuthContext)

  const handleSubmition = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
          .then(res => {
              const loggedUser = res.user;
              console.log(loggedUser)
              toast.success(`Welcome ${loggedUser.email}`)
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
  }

  const continueWithGoogle = () => {
      googleSingIn()
          .then(res => {
              const loggedUser = res.user;
              toast.success('Successfully Logged With Google')
          })
          .catch(error => {
            toast.error('An error occurred, please try again later');
        });
  }

  const continueWithGithub = () => {
    githubSingIn()
        .then(res => {
            const loggedUser = res.user;
            toast.success('Successfully Logged With Github')
        })
        .catch(error => {
          toast.error('An error occurred, please try again later');
      });
}

  return (
    <Form onSubmit={handleSubmition}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button> <br />
      <div className='d-flex justify-content-center align-items-center gap-4'>
        <Button onClick={continueWithGoogle} className='my-3 fs-4' variant="outline-warning"><Icon icon="mdi:google" /></Button>
        <Button onClick={continueWithGithub} className='my-3 fs-4' variant="outline-dark"><Icon icon="mdi:github" /></Button>
      </div>
      <p>New on Chef's Conclave? <Link to='/register'>Register</Link></p>
    </Form>
  );
};

export default Login;