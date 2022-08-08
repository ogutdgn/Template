import React from 'react';
import Card from '@mui/material/Card';
import Todos from '../Todos/Todos';
import { CardHeader } from '@mui/material';

const UserTodos = ({ username }) => {

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