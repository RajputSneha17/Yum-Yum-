import React, { useState, useEffect } from "react";
import RightSide from "./RightSide";

const Search = () => {
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState([]);
  const [itemId, setitemId] = useState("658615");
  const apiKey = "2e186a9079d34f88af427f6505976e1b";

  const scrollToRightSide = () => {
    const section = document.getElementById("rightSide");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                onClick={() => {
                  setitemId(item.id);
                  scrollToRightSide();
                }}
              >
                Check Recipe
              </button>
            </div>
          ))}
        </div>
        <section id="rightSide">
          <div className="search-right-side">
            <RightSide itemId={itemId} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Search;
