import React from 'react';
import { Navigate, useNavigate} from "react-router-dom"

function RecipeCard({recipe}) {
    const navigate = useNavigate()
    const handleClick = () => {
        Navigate(`/recipe/${recipe.recipe_id}`)
    }
  return (
    <div className="recipe-card">
        <img src="https://40aprons.com/wp-content/uploads/2020/04/best-tuna-noodle-casserole-10-e1620012135332.jpg" alt="tunafish" />
        <h1>Tuna Fish Casserole</h1>
        <button onClick={handleClick}>See more</button>
    </div>
  )
}

export default RecipeCard