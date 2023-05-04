import { InlineIcon } from '@iconify/react';
import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

const SingleRecipe = ({ recipes }) => {
    const { description, ingredients, instructions, recipe, recipePhoto, servings } = recipes;

    const [isDisabled, setIsDisabled] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleFavoriteClick = () => {
        setIsDisabled(true);
        setShowToast(true);
    };

    return (
        <div className='grid p-3 mb-md-4 SingleRecipes bg-light rounded '>
            <div className='chefRecipeImg'>
                <Button className='position-absolute' variant="dark" onClick={handleFavoriteClick} disabled={isDisabled}>Favorite <InlineIcon className='text-danger' icon="solar:chat-round-like-bold" /> </Button>
                <img className='img-fluid' src={recipePhoto} alt="" />
                <h4 className='text-white p-1 rounded recipe'>{recipe}</h4>
                <h4 className='recipeDesc text-white'>{description}</h4>
                
            <Toast  className="position-absolute top-50 start-50 translate-middle" show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
            <Toast.Body>Added to favorite <InlineIcon className='text-danger' icon="solar:chat-round-like-bold" /></Toast.Body>
        </Toast>
            </div>
            <div>
                <h3>Ingredients</h3>
                <h5>For {servings} Person</h5>
                {ingredients.map((ingre, i) => (
                    <p key={i}>{ingre}</p>
                ))}
            </div>
            <div>
                <h3>Instructions</h3>
                {instructions.map((ins, i) => (
                    <p key={i}>
                        {i + 1}: {ins}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SingleRecipe;
