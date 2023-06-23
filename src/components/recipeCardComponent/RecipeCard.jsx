import React from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
        <div className="recipe-card">
            <div>
                <div className="recipe-img-container">
                    <img src={recipe.image_url} alt="recipe" />
                </div>
                <h2>{recipe.recipe_name}</h2>
            </div>
        <button onClick={handleClick}>See more</button>
    </div>
)
}

export default RecipeCard