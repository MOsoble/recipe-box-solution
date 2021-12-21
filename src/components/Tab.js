import React from "react";
import "./Tab.css";

const Tab = ({ recipe, onSelectRecipe }) => {
  return (
    <div className="tab bg-warning mb-2" onClick={() => onSelectRecipe(recipe)}>
      <h5>{recipe.title}</h5>
    </div>
  );
};

export default Tab;
