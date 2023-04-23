import React,{useState} from "react";
import Task from "./Task";

function TaskList(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const taskItems = tasks.map(task => {
    return <Task key={task.id} task={task} onDelete={handleDeleteTask} />
  });

  return (
    <div className="task-list">
      {taskItems}
    </div>
  );
}

export default TaskList;
