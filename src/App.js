import "./App.css";
import axios from "axios"
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailScreen from "./components/detailComponents/DetailScreen";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import RecipeCard from "./components/recipeCardComponent/RecipeCard";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      <RecipeCard/>
      <Footer />
    </div>
  );
}

export default App;
