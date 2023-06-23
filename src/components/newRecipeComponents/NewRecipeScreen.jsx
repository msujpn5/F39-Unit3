import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {

  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }])
    setName("")
    setQuantity("")
  }

  const initialValues = {
    type:"",
    recipeName:"",
    imageURL:"",
    prepTime:"",
    cookTime:"",
    serves:"",
    ingredients:[],
    instructions:"",
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)

    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    )
  })

  return (
    <section className="form-section">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="name-url-container">
            <input value={values.recipeName} onChange={handleChange} placeholder="Name" name="recipeName"/>
            <input value={values.imageURL} onChange={handleChange} placeholder="Image URL" name="imageURL"/>
          </div>
          <div className="radio-btns-container">
            <input type="radio" value="Cook" onChange={handleChange} name="type"/><h5>Cook</h5>
            <input type="radio" value="Bake" onChange={handleChange} name="type"/><h5>Bake</h5>
            <input type="radio" value="Drink" onChange={handleChange} name="type"/><h5>Drink</h5>
          </div>
          <div className="prep-cook-serve-container">
            <input placeholder="Prep Time" onChange={handleChange} value={values.prepTime} name="prepTime" />
            <input placeholder="Cook Time" onChange={handleChange} value={values.cookTime} name="cookTime" />
            <input placeholder="Serves" onChange={handleChange} value={values.serves} name="serves" />
          </div>
          <h3>Ingredients</h3>
          <div className="input-container">
          <div className="ing-quant-container">
            <input placeholder="Ingredient" value={name} onChange={(event) => setName(event.target.value)}/>
            <input placeholder="Quantity"  value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
          </div>
          <ul>{ingredientDisplay}</ul>
          </div>
          <div className="lower-container">
          <button className="orange-btn" onClick={addIngredient}>Add Another</button>
          <textarea placeholder="What are the instructions?" onChange={handleChange} value={values.instructions} name="instructions" rows={5}/>
          <button type="submit" className="blue-btn">Save</button>
          </div>
        </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
