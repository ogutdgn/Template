import React from 'react';
import { todosStore } from '../../store/todosStore';
import { useEffect } from 'react';
import AlertDialog from '../../components/Alert/Alert';

const UserTodos = ({ username }) => {
  const { fetchUserTodos, userTodos, error } = todosStore();

  useEffect(() => {
    fetchUserTodos(username);
    
  }, [fetchUserTodos, username]);

  return (
    <div>
      <div>
        {
          error && <AlertDialog/>
        }
      </div>
      
      {
        userTodos.map((userTodo) => (
          <p>{userTodo.title}</p>
        )) 
      }
    </div>
  );
}

export default UserTodos;