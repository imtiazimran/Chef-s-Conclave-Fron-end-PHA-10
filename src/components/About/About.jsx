import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row className='justify-content-center'>
        <Col md={6}>
          <h2>About Us</h2>
          <p>Welcome to our chef's website! We are passionate about creating delicious and healthy meals that will tantalize your taste buds. Our team of expert chefs has many years of experience in the culinary arts, and we pride ourselves on using only the freshest and highest-quality ingredients in all of our dishes.</p>
          <p>Whether you're looking for a romantic dinner for two, a family meal, or catering for a special event, we've got you covered. Our menu is diverse and constantly evolving to keep up with the latest food trends and customer demands.</p>
          <p>Thank you for considering us for your next meal. We look forward to serving you soon!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
