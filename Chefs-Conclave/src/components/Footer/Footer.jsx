import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer className="bg-light py-5 fs-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; 2023 Chef's Conclave</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">Designed and Developed by Imran</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3 d-flex gap-4 justify-content-center">
            <p className="mb-0">Follow Chef's Conclave on:</p>
            <a href="https://www.instagram.com/chefsconclave/" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:instagram" /> </a>
            <a href="https://www.facebook.com/chefsconclave/" target="_blank" rel="noopener noreferrer"><Icon icon="ic:baseline-facebook" /></a>
            <a href="https://www.twitter.com/chefsconclave/" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:twitter" /> </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
