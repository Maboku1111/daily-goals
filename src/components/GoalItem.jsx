/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GoalItem = ({ goal, onDelete, onEdit }) => {
  return (
    <li>
      <h2>{goal.title}</h2>
      <p>{goal.description}</p>
      <p>{goal.dueDate}</p>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
      <button onClick={() => onEdit(goal)}>Edit</button>
    </li>
  );
};

export default GoalItem;
