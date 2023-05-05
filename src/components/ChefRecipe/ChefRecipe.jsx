import { Icon, InlineIcon } from '@iconify/react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';
import './Chef.css'
import useTitle from '../CustomHooks/useTitle';

const ChefRecipe = () => {
    const data = useLoaderData()
    useTitle("Testy Recipe From Chefs")
    const { chef_picture, chef_name, likes, num_of_recipes, chefRecipe, years_of_experience, bio } = data
    return (
        <div className='container'>
            <div className='mt-5 grid text-center rounded  aboutChef'>
                <img className='img-fluid rounded shadow' src={chef_picture} />
                <div className='mt-md-0 mt-5'>
                    <h1 className='mb-5'>{chef_name}</h1>
                    <div className='fs-3'>
                        <p>Total Likes <Icon className='text-danger' icon="solar:chat-round-like-bold" /> {likes}</p>
                        <p>Total Recipe: {num_of_recipes}<Icon className='text-primary fs-5' icon="bxs:dish" /></p>
                        <p>{years_of_experience} Years of Exprecience</p>
                    </div>
                </div>
                <div>
                 <h2 className='p-2 rounded text-white bg-info bg-gradient'>Biography</h2>
                 <p>{bio}</p>
                </div>
            </div>
            <div>
                {
                    chefRecipe.map((rec, id) => <SingleRecipe key={id} recipes={rec}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;