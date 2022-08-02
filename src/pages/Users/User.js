import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FcTodoList } from "react-icons/fc";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import emptyProfile from "../../assets/imgs/empty-profile.svg";
import UserTodo from "./UserTodo";

const User = ({ username, useremail}) => {

    const [eachPerson, setEachPerson] = useState(false);

    const openPersonTodo = () => {
        setEachPerson(!eachPerson)
    }
  return (
    <div>
        <Card className="user">

            <CardHeader
            avatar={
                <Avatar aria-label="user" className='userAvatar'>
                <img src={emptyProfile} alt="" height={35}/>
                </Avatar>
            }
            
            title={username}
            subheader={useremail}
            />

            <CardActions disableSpacing>

            <IconButton aria-label="add to favorites" onClick={openPersonTodo}>
                <FcTodoList/>
            </IconButton>

            {/* <IconButton aria-label="share">
                <ShareIcon style={{color: "rgb(0, 7, 225)"}}/>
            </IconButton> */}

            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            
            </CardActions>
        </Card>
        {
            eachPerson && <UserTodo username={username}/>
        }
    </div>
  )
}

export default User