import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Icon } from '@iconify/react';

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext)
 const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    navigate("/login")
  }
  return (
    <div>
      <Navbar bg="dark" variant="light">
        <Container>
          <Link className='fs-4 ' to="/">Chef's Conclave</Link>
          <Nav className="mx-auto d-md-flex gap-3">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/recipe">Menu</ActiveLink>
            <ActiveLink to="/chef">See Chef's</ActiveLink>
          </Nav>
          {
            user ?
              <Button onClick={handleLogOut} variant="outline-primary">Log Out </Button> :
              <Link to="/login"><Button variant="outline-primary">Log In </Button></Link>
          }
          
         <div className='mx-3'>
         {user &&
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="user-tooltip">{user.displayName ? (user.displayName):(user.email)}</Tooltip>}
          >
          {user.photoURL ? (
            <img className='rounded-circle' src={user.photoURL} alt="User" />
          ) : (
            <Icon className='text-white fs-1' icon="mdi:user-circle" />
          )}
          </OverlayTrigger>}
         </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;