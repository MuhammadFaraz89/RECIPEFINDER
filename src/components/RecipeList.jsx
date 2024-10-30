import React from "react";
import RecipeItem from "./RecipeItem";
function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="no-recipes">No recipes found.</p>
      )}
      {/* <RecipeItem/> */}
    </div>
  );
}

export default RecipeList;
