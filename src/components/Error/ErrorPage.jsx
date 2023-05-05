import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../CustomHooks/useTitle';

const NotFound = () => {
  useTitle('Error')
  return (
    <Container>
      <Row>
        <Col>
        <Link to="/"><button className='btn btn-danger'>Home</button></Link>
          <Image className='img-fluid'
            src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"
            fluid
            alt="Page not found"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
