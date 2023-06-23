import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from "axios";
import RecipeCard from "../recipeCardComponent/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";

const HomeScreen = () => {  

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  
  const getRecipes = () => {
    axios
    .get('https://recipes.devmountain.com/recipes')
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  }

  const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <section className="recipes-and-search">
        <div className="search-bar">
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input type="text" placeholder='Search for a Recipe' value={search} onChange={(event) => setSearch(event.target.value)}/>
    </div>
    <div className="recipes-container">
        {recipeDisplay ? recipeDisplay : <h2>No recipes</h2>}
    </div>
    </section>
    </div>
  )
}

export default HomeScreen