import React, { useRef, useContext } from 'react';
import { TodoContext, ACTION } from '../TodoProvider/TodoContext';

const TodoForm = () => {
  const inputRef = useRef();
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value.trim();
    if (!inputValue) {
      return; // Do not add empty todos
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    console.log('Form submitted:', newTodo); // Debug log

    dispatch({ type: ACTION.ADD_TODO, payload: newTodo });
    inputRef.current.value = ''; // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center bg-white shadow-md rounded-lg p-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new todo"
        className="border rounded-lg p-2 flex-grow outline-none focus:border-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-600 transition duration-150">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
