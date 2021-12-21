import React from "react";
import Tab from "./Tab";

const TabList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className=" col">
      {recipes.map((r) => (
        <Tab recipe={r} onSelectRecipe={onSelectRecipe} />
      ))}
    </div>
  );
};

export default TabList;
