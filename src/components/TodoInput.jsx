import React, { useState } from "react";

export default function TodoInput({ handleTodoList, newVal, setNewVal }) {
  return (
    <header>
      <input
        value={newVal}
        onChange={(e) => {
          setNewVal(e.target.value);
        }}
        placeholder="Enter Input.."
      />
      <button
        onClick={() => {
          handleTodoList(newVal);
          setNewVal("");
        }}
      >
        Add
      </button>
    </header>
  );
}
