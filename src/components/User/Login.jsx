import { Icon } from '@iconify/react';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

  const { googleSingIn, githubSingIn, signIn, user } = useContext(AuthContext)
  
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  const location = useLocation()
  
  const from = location.state?.from.pathname || '/'

  

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
              navigate(from, { replace: true }) 
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
              // navigate(from, { replace: true }) 
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
            // navigate(from, { replace: true }) 
        })
        .catch(error => {
          toast.error('An error occurred, please try again later');
      });
}
console.log(from)
  useEffect(()=>{
    if(user){
      navigate(from, { replace: true }) 
    }
  },[from])
  
  return (
    <Form className='px-3' onSubmit={handleSubmition}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type={showPassword ? "text" : "password"} placeholder="Password" required />
        <small className='text-danger p-2' onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"} Password</small>
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