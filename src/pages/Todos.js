import React, { useEffect } from 'react';
import { todosStore } from '../store/todosStore';


const Todos = () => {
  const { fetchTodos, todos } = todosStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos])
  
  // console.log(todos);

  return (
    <div>
      {
        todos && todos.map((todo) => (
          <p>{todo.title}</p>
        ))
      }
    </div>
  )
}

export default Todos