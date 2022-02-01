import React from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
