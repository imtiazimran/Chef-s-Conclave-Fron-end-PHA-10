import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(id)
    return (
        <div>
            this is from chef recipe
        </div>
    );
};

export default ChefRecipe;