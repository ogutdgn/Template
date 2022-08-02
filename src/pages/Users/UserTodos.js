import React from 'react';
import { todosStore } from '../../store/todosStore';
import { useEffect } from 'react';
import AlertDialog from '../../components/Alert/Alert';
import Card from '@mui/material/Card';

const UserTodos = ({ username }) => {
  const { fetchUserTodos, userTodos, error } = todosStore();

  useEffect(() => {
    fetchUserTodos(username);
    
  }, [fetchUserTodos, username]);


  return (
    <Card className="eachPersonTodo">
      <div>
        {
          error && <AlertDialog/>
        }
      </div>
      
      <div className="userTodo" style={{height: "450px"}} >
        {
          userTodos.map((userTodo) => (
            <p>{userTodo.title}</p>
          )) 
        }
      </div>
    </Card>
  );
}

export default UserTodos;