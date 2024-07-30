/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, onDelete, onEdit }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default GoalList;
