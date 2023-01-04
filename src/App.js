import "./App.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const addingTask = {
      id: Date.now(),
      text: newTask,
    };
    setTasks([...tasks, addingTask]);
  };

  const removeTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  return (
    <div className="App">
      <div className="addTask">
        <div>
          <input type="text" placeholder="Todo..." onChange={handleChange} />
          <button onClick={addTask}>Add</button>
        </div>
      </div>
      <div className="viewTasks">
        {tasks.map((task, index) => {
          return (
            <div className="task">
              <div className="taskHeader">
                <p>{index}. </p>
                <button onClick={() => removeTask(task.id)}>Remove</button>
              </div>
              <div className="taskBody">
                <p>{task.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
