import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleTodoDelete, handleTodoEdit } = props;
  return (
    <ul className="main">
      {todos.map((item, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            index={todoIndex}
            item={item}
            handleTodoDelete={handleTodoDelete}
            handleTodoEdit={handleTodoEdit}
          />
        );
      })}
    </ul>
  );
}
