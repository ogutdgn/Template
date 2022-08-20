import React from 'react';
import Card from '@mui/material/Card';
import TodoList from '../Todos/TodoList';
import { CardHeader } from '@mui/material';

const UserTodos = ({ currentUser }) => {


  return (
      <div>
        <Card className="eachPersonTodo" id="userTodo">
          <CardHeader title={`${currentUser?.name}'s Todos`}/>
          <TodoList/>
        </Card>
      </div>
  );
}

export default UserTodos;