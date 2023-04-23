import React from "react";

function Task(props) {
  const { text, category } = props.task;

  function handleDelete() {
    props.onDelete(props.task.id);
  }

  return (
    <div className="task">
      <div className="task-text">{text}</div>
      <br/>
      <div className="task-category">{category}</div>
      <br/>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
