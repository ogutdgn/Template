import React, { useEffect } from 'react';
import { todosStore } from '../../store/todosStore';
import AlertDialog from '../../components/Alert/Alert';

import "./Todos.css";
import Todo from './Todo';


const Todos = () => {
  const { fetchTodos, todos, error } = todosStore();

  useEffect(() => {
    console.log("todolar fetch oluyo");
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
            todos && todos.map((todo, index) => (
              <Todo title={todo.title} key={index}/>
            ))
          }
        </div>
      </div>

  )
}

export default Todos