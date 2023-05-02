import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link className='fs-4 ' to="/">Chefs Conclave</Link>
          <Nav className="mx-auto d-flex gap-3">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/recipe">Recipe</Link>
            <Link to="/chef">See Chef's</Link>
          </Nav>
          <Link to="/register"><Button variant="outline-success">Register</Button></Link>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;