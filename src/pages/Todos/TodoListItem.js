import React, { useState } from 'react';
import { IoMdDoneAll } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Card from '@mui/material/Card';
import { IconButton } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { CardActions } from '@mui/material';
import { todosStore } from '../../store/todosStore';
import Confirm from '../../components/Confirm/Confirm';

const Todo = ({ todo, index }) => {
  
  const [completeStatus, setCompleteStatus] = useState(todo.completed);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [confirmParams, setConfirmParams] = useState();

  const { changeCompleteStatus, deleteChoosenTodo } = todosStore();

  const deleteTodo = () => {
    deleteChoosenTodo(todo);
    setConfirmStatus(false);
  }

  const handleDeleteTodo = () => {
    setConfirmStatus(true)
    setConfirmParams({msg: "Siliyorum", title: "Delete okeymi?", okeyCallBack: deleteTodo});
  }

  return (
    <div className="eachTodo" key={index}>
      <Card className={`todo ${todo.completed ? "checked" : ""}`}>
          <div className="leftSideOfCard">
            { todo.completed === false && <div className="needToDo"></div> }
            <div className="todoTitle">
              <input type="text" value={todo.title}/>
            </div>
          </div>
          <CardActions className="icon">

            <IconButton onClick={() => handleDeleteTodo(todo)}>
              <MdDelete/>
            </IconButton>

            <IconButton onClick={() => {setCompleteStatus(!completeStatus); changeCompleteStatus(todo);}}>
              {
                todo.completed ? <IoMdDoneAll color="green"/> : <GiCancel color="red"/>
              }
            </IconButton>

          </CardActions>
      </Card>
      <Confirm open={confirmStatus} setOpen={setConfirmStatus} okeyCallBack={confirmParams?.okeyCallBack} msg={confirmParams?.msg} title={confirmParams?.title}/>
    </div>
  ) 
}

export default Todo;