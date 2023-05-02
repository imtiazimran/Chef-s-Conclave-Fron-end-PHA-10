import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Icon } from "@iconify/react";

const Recipie = ({ item }) => {
    const { name, description, photo } = item
    return (
        <div className='recipie-item'>
            <CardGroup>
                <Card className=' mx-auto mt-2' style={{ width: '18rem' }}>
                    <Card.Img className='img-fluid' variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary"><Icon icon="mdi:cards-heart" /> Fevorite</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Recipie;