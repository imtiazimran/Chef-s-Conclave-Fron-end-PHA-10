import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const ChefInfo = ({chef}) => {
    const {chef_picture, chef_name, likes, num_of_recipes, years_of_experience} = chef
    console.log(chef)
    return (
        <div>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src={chef_picture} />
          <Card.Body>
            <Card.Title>{chef_name}</Card.Title>
            <Card.Text className='d-flex gap-4'>
              <p>{likes}</p>
              <p>{num_of_recipes}</p>
              <p>{years_of_experience}</p>
            </Card.Text>
          </Card.Body>
        </Card>
       
      </CardGroup>
        </div>
    );
};

export default ChefInfo;