import React, { useState } from 'react';
import { IoMdDoneAll } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';

const Todo = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked);
    
  }

  return (
    <Card className={`todo ${isChecked ? "checked" : ""}`}>
        <p>{title}</p>
        <CardActions className="icon">
          {
              isChecked ? 
              (<IoMdDoneAll onClick={() => handleCheck()} style={{color: "green"}}/>)
              : 
              (<GiCancel onClick={() => handleCheck()} style={{color: "red"}}/>)
          }
        </CardActions>
    </Card>
  ) 
}

export default Todo