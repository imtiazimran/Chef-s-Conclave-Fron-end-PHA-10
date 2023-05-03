import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Navigation = () => {
    return (
        <div>
      <Navbar bg="dark" variant="light">
        <Container>
          <Link className='fs-4 ' to="/">Chef's Conclave</Link>
          <Nav className="mx-auto d-flex gap-3">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/recipe">Menu</ActiveLink>
            <ActiveLink to="/chef">See Chef's</ActiveLink>
          </Nav>
          <Link to="/register"><Button variant="outline-primary">Register</Button></Link>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;