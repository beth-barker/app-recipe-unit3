import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCard.css'

function RecipeCard({recipe}) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
        <div className='card'>
            <img src={recipe.image_url} alt=""/>
            <p className='title'>{recipe.recipe_name}</p>
            <button className='see-more' onClick={handleClick}>See More</button>
        </div>
    );
}

export default RecipeCard;