import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./HomeScreen.css";
import RecipeCard from "../newRecipeComponents/RecipeCard";

function RecipeDisplay({ recipes }) {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <section className="recipe-section">
      <span className="search-bar">
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className="recipe-container">
        {recipeDisplay ? recipeDisplay : <h2>No recipes</h2>}
      </div>
    </section>
  );
}

export default RecipeDisplay;
