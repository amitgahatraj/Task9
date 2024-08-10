import { useState } from "react";

import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex)); // Filter out the task to be deleted
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
