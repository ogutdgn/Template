import React from 'react';
import { todosStore } from '../../store/todosStore';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import Todos from '../Todos/Todos';
import { CardHeader } from '@mui/material';

const UserTodos = ({ username }) => {
  const { fetchUserTodos } = todosStore();

  useEffect(() => {
    fetchUserTodos(username);
    
  }, [fetchUserTodos, username]);


  return (
      <div>
        <Card className="eachPersonTodo" id="userTodo">
          <CardHeader title={`${username}'s Todos`}/>
          <Todos/>
        </Card>
      </div>
  );
}

export default UserTodos;