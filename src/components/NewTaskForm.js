import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    console.log("New task:", newTask);
    // TODO: Add new task to the list
    setFormData({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {categories.filter((category) => category !== "All").map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
