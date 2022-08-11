import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FcTodoList } from "react-icons/fc";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import emptyProfile from "../../assets/imgs/empty-profile.svg";
import { usersStore } from '../../store/usersStore';

const UserListItem = ({ user, index, openUserForm, openTodoList }) => {

    const { setCurrentUser, currentUser } = usersStore();
    const {name, email} = user

  return (
    <div>
        <Card className="user" key={index}>
        {
            currentUser?.name === name && <div className="choosen"></div>
        }

            <CardHeader
            avatar={
                <Avatar aria-label="user" className='userAvatar'>
                <img src={emptyProfile} alt="" height={35}/>
                </Avatar>
            }
            
            title={name}
            subheader={email}
            />

            <CardActions disableSpacing>

            <IconButton onClick={() => {setCurrentUser(user); openTodoList();}}>
                <FcTodoList/>
            </IconButton>

            <IconButton onClick={() => {setCurrentUser(user); openUserForm();}}>
                <MoreVertIcon/>
            </IconButton>
            
            </CardActions>
        </Card>
    </div>
  )
}

export default UserListItem;