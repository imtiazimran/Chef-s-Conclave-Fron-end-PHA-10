import React from 'react';

const SingleRecipe = ({ recipes }) => {
    const { description, ingredients, instructions, recipe, recipePhoto, servings } = recipes
    return (
        <div className='grid p-3 mb-md-4 SingleRecipes bg-light rounded '>
            <div className='chefRecipeImg'>
                <img className='img-fluid' src={recipePhoto} alt="" />
                <h4 className='text-white p-1 rounded recipe'>{recipe}</h4>
                <h4 className='recipeDesc text-white'>{description}</h4>
            </div>
            <div>
                <h3>Ingredients</h3>
                <h5>For {servings} Person</h5>
                {
                    ingredients.map((ingre, i) => <p key={i}>{ingre}</p>)
                }
            </div>
            <div>
                <h3>Instructions</h3>
                {
                    instructions.map((ins, i) => <p key={i}>{i+1}: {ins}</p>)
                }
            </div>
        </div>
    );
};

export default SingleRecipe;