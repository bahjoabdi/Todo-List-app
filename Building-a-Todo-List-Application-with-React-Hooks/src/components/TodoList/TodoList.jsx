import React, { useContext, useMemo } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoContext } from '../TodoProvider/TodoContext';

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { todos, filter } = state;

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  console.log('Filtered Todos:', filteredTodos); // Debug log

  return (
    <ul className="list-none p-0 bg-white shadow-lg rounded-lg">
      {filteredTodos.map(todo => {
        console.log('Passing Todo to TodoItem:', todo); // Debug log
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
