import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { todosStore } from '../store/todosStore';
import AlertDialog from '../components/Alert/Alert';


const Todos = () => {
  const { fetchTodos, todos, error } = todosStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos])
  
  // console.log(todos);

  return (
    <Layout>
      <div>
        {
          error && <AlertDialog/>
        }
      </div>
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