import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { todosStore } from '../../store/todosStore';
import AlertDialog from '../../components/Alert/Alert';

import "./Todos.css";
import Todo from './Todo';


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
          <Todo title={todo.title}/>
        ))
      }
    </div>
    </Layout>
  )
}

export default Todos