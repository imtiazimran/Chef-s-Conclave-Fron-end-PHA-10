import React from 'react';
import { Card } from 'react-bootstrap';

const SingleTips = ({ tips }) => {

    const { title, description, } = tips
    return (
        <div>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleTips;