import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FcTodoList } from "react-icons/fc";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import emptyProfile from "../../assets/imgs/empty-profile.svg";

const User = ({ username, useremail, detailCallback}) => {


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

            <IconButton aria-label="add to favorites" onClick={() => detailCallback(username)}>
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
    </div>
  )
}

export default User