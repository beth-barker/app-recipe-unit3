import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import './HomeScreen.css';
import RecipeDisplay from "./RecipeDisplay";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

 

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipe-search">
      <AdBanner />
      <RecipeDisplay recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;
