import React, { useCallback, useContext } from 'react';
import { TodoContext, ACTION } from '../TodoProvider/TodoContext';

const TodoFilter = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { filter } = state;

  const setFilter = useCallback((filter) => {
    console.log('Setting filter:', filter); // Debug log
    dispatch({ type: ACTION.SET_FILTER, payload: filter });
  }, [dispatch]);

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          filter === 'active' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
