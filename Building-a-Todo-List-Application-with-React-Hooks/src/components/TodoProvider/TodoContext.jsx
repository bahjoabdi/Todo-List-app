import React, { createContext, useReducer, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const ACTION = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  SET_FILTER: 'SET_FILTER',
};

const initialState = {
  todos: [],
  filter: 'all',
};

const todoReducer = (state, action) => {
  console.log('Reducer Action:', action); // Debug log
  switch (action.type) {
    case ACTION.ADD_TODO:
      console.log('Adding todo:', action.payload); // Debug log
      return { ...state, todos: [...state.todos, action.payload] };
    case ACTION.DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case ACTION.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case ACTION.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    case ACTION.SET_FILTER:
      console.log('Setting filter in reducer:', action.payload); // Debug log
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const TodoContext = createContext();

 const TodoProvider = ({ children }) => {
  const [localStorageTodos, setLocalStorageTodos] = useLocalStorage('todos', initialState.todos);
  const [state, dispatch] = useReducer(todoReducer, { ...initialState, todos: localStorageTodos });

  useEffect(() => {
    setLocalStorageTodos(state.todos);
  }, [state.todos, setLocalStorageTodos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
