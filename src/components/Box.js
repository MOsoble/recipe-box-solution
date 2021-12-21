import React, { useEffect, useState } from "react";
import TabList from "./TabList";
import Card from "./Card";
import axios from "axios";
import "./Box.css";

const Box = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=e9e571deee31402faeed1d453f7cd52f&number=8&tags=dessert&limitedLicense=true"
      )
      .then((response) => {
        console.log(response.data.recipes);
        setRecipes([...response.data.recipes]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="row justify-content-center px-lg-2 bg-info py-lg-3">
      <TabList recipes={recipes} onSelectRecipe={selectRecipe} />
      <Card selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default Box;
