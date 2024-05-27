import React from "react";
import TodoProvider from "./components/TodoProvider/TodoContext";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoFilter from "./components/TodoFilter/TodoFilter";

const App = () => {
  return (
  
    <TodoProvider>
      <div className="max-w-lg mx-auto mt-8">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <TodoForm />
        <TodoList />
        <TodoItem />
        <TodoFilter />
        /</div>
    </TodoProvider>

  );
};

export default App;
