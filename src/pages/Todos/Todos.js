import React, { useEffect } from 'react';
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

      <div>
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
      </div>

  )
}

export default Todos