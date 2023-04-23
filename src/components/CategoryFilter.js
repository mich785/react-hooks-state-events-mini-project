import React, { useState } from "react";

function CategoryFilter(props) {
  const [selectedCategory, setSelectedCategory] = useState(" ");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [ ...props.categories];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

