import React, { useEffect } from 'react';
import { todosStore } from '../../store/todosStore';
import AlertDialog from '../../components/Alert/Alert';

import "./Todos.css";
import TodoListItem from './TodoListItem';


const Todos = () => {
  const { fetchTodos, todos, error } = todosStore();

  useEffect(() => {
    console.log("todolar fetch oluyo");
    fetchTodos();
  }, [fetchTodos])

  
  //console.log(todos);
  
  return (

      <div className='disable-text-selection'>
        <div>
          {
            error && <AlertDialog error={error}/>
          }
        </div>
        <div>
          {
            todos && todos.map((todo, index) => (
              <TodoListItem todo={todo} index={index}/>
            ))
          }
        </div>
      </div>

  )
}

export default Todos