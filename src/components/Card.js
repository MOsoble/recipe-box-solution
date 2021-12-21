import React from "react";
import "./Card.css";

const Card = ({ selectedRecipe }) => {
  return (
    <div className="card-container container bg-light m-2">
      <div className="row p-1">
        <div className="col-6">
          <h5>Ingredients</h5>
          <ul>
            {selectedRecipe.extendedIngredients
              ? selectedRecipe.extendedIngredients.map((item) => (
                  <li>{item.original}</li>
                ))
              : null}
          </ul>
        </div>
        <div className="col-6">
          <h5>Instructions</h5>
          <p>{selectedRecipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
