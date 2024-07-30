/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);

  return (
    <div className="App">
      <GoalForm
        onCreateGoal={(newGoal) => {
          setGoals([...goals, newGoal]);
        }}
      />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
