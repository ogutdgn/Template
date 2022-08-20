import React, { useState } from 'react';
import { IoMdDoneAll } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import { todosStore } from '../../store/todosStore';

const Todo = ({ todo }) => {
  
  const [completeStatus, setCompleteStatus] = useState(todo.completed);
  const { changeCompleteStatus } = todosStore();

  return (
    <div className="eachTodo">
      <Card className={`todo ${completeStatus ? "checked" : ""}`}>
          <div className="leftSideOfCard">
            { completeStatus !== true && <div className="needToDo"></div> }
            <div className="todoTitle">
              <p>{todo.title}</p>
            </div>
          </div>
          <CardActions className="icon" onClick={() => {setCompleteStatus(!completeStatus); changeCompleteStatus(todo); console.log(todo)}}>
            {
                todo.completed ? <IoMdDoneAll/> : <GiCancel color='red'/>
            }
          </CardActions>
      </Card>
    </div>
  ) 
}

export default Todo