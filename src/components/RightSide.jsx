import React, { useEffect, useState } from "react";
import "../App.css";

const RightSide = ({ itemId }) => {
  const [data, setData] = useState([]);

  const api = "aa485bdce5bd4a90b971ff8119f25a82";
  const link = `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=${api}`;

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div className="right-side-container">
      <div className="ingredients-card">
        <div className="intro">
          <h2 className="recipe-title">{data.title}</h2>
          <img src={data.image} alt="Recipe" className="recipe-main-img" />
          <ul className="recipe-meta">
            <li>⌚ {data.readyInMinutes} Minutes</li>
            <li>👩‍👧‍👦 Serves {data.servings}</li>
            <li>{data.vegetarian ? "☘️ vegetarian" : "🍖 non-vegetarian"}</li>
          </ul>
          <h6 className="price">${data.pricePerServing} Per Serving</h6>
        </div>

        <div className="ingredients">
          <h2 className="section-title">Ingredients</h2>
          {data.extendedIngredients?.map((item, index) => (
            <div key={index} className="ingredient-card">
              <div className="ingredient-img">
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                  alt={item.name}
                />
              </div>
              <div className="ingredient-info">
                <h3>{item.name}</h3>
                <h6>
                  {item.amount} {item.unit}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="instructions">
        <h2 className="section-title">Instructions</h2>
        {data.instructions ? (
          <ul dangerouslySetInnerHTML={{ __html: data.instructions }}></ul>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </div>
  );
};

export default RightSide;
