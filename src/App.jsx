import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newVal, setNewVal] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  const handleTodoEdit = (index) => {
    const todoEditVal = todos[index];
    setNewVal(todoEditVal);
    handleTodoDelete(index);
  };

  const handleTodoDelete = (index) => {
    const newTodoList = todos.filter((todo, todosIndex) => {
      return todosIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleTodoList = (newItem) => {
    const newTodoList = [...todos, newItem];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");

    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <main>
      <TodoInput
        newVal={newVal}
        setNewVal={setNewVal}
        handleTodoList={handleTodoList}
      />
      <TodoList
        handleTodoDelete={handleTodoDelete}
        handleTodoEdit={handleTodoEdit}
        todos={todos}
      />
    </main>
  );
}

export default App;
