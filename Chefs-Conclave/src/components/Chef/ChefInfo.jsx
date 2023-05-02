import { Icon } from '@iconify/react';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefInfo = ({chef}) => {
    const {chef_picture, chef_name, likes, num_of_recipes, years_of_experience} = chef
    console.log(chef)
    return (
        <div>
        <CardGroup>
        <Card className='shadow p-3'>
        <div className="overley"></div>
          <Card.Img variant="top" src={chef_picture} />
          <Card.Body>
            <Card.Title>{chef_name}</Card.Title>
            <Card.Text className='d-flex fs-5 align-items-center gap-4'>
              <p>Likes <Icon className='text-danger' icon="solar:chat-round-like-bold" />{likes}</p>
              <p>Total Recipe: {num_of_recipes}<Icon className='text-primary fs-5' icon="bxs:dish" /></p>
              <p>{years_of_experience} Year Exprecience</p>
            </Card.Text>
          </Card.Body>
          <Link><button className='btn btn-primary'>View Recipe</button></Link>
        </Card>
       
      </CardGroup>
        </div>
    );
};

export default ChefInfo;