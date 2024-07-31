/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import AuthForm from "./components/AuthForm";

function App() {
  const [goals, setGoals] = useState([]);

  return (
    <div className="App">
      <h1>Daily Goals</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
          <Route
            path="/"
            element={
              <>
                <GoalForm
                  onCreateGoal={(newGoal) => {
                    setGoals([...goals, newGoal]);
                  }}
                />
                <GoalList goals={goals} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
