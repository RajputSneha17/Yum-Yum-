import React, { useState, useEffect } from "react";
import RightSide from "./RightSide";

const Search = () => {
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState([]);
  const [itemId, setitemId] = useState("658615");
  const apiKey = "aa485bdce5bd4a90b971ff8119f25a82";

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="search-input"
        />
      </div>

      <div className="search-content-container">
        <div className="search-card-container">
          {data.map((item, index) => (
            <div className="recipe-card" key={index}>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-title">{item.title}</div>
              <button
                className="card-button"
                onClick={() => setitemId(item.id)}
              >
                Check Recipe
              </button>
            </div>
          ))}
        </div>

        <div className="search-right-side">
          <RightSide itemId={itemId} />
        </div>
      </div>
    </div>
  );
};

export default Search;
