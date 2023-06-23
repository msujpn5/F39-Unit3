import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {  
  const {id} = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios
        .get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
          setRecipe(res.data)
        })
  }, [])

  return (
    <section>
      <div className="img-container">
        <img src={recipe.image_url} alt=""/>
        <h1>{recipe.recipe_name}</h1>
      </div>
      <div className="detail-container">
        <div className="ingredients-container">
            <h2>Recipe</h2>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>
            <h2>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ingred, index) => {
              return (
                <h4>{ingred.quantity} {ingred.ingredient}</h4>
              )
            })}
        </div>
        <div className="instruction-container">
          <h2>Instructions</h2>
          <p style={{whiteSpace: "pre-wrap"}}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
