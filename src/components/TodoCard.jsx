import React from "react";

export default function TodoCard({
  index,
  item,
  handleTodoDelete,
  handleTodoEdit,
}) {
  return (
    <div>
      <li className="todoItem">
        <p>{item}</p>
        <div className="actionsContainer">
          <button
            onClick={() => {
              handleTodoEdit(index);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button>
            <i
              className="fa-solid fa-trash"
              onClick={() => {
                handleTodoDelete(index);
              }}
            ></i>
          </button>
        </div>
      </li>
    </div>
  );
}
