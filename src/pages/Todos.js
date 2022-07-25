import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { todosStore } from '../store/todosStore';


const Todos = () => {
  const { fetchTodos, todos } = todosStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos])
  
  // console.log(todos);

  return (
    <Layout>
    <div>
      {
        todos && todos.map((todo) => (
          <p key={todo.title}>{todo.title}</p>
        ))
      }
    </div>
    </Layout>
  )
}

export default Todos