import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FcTodoList } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import emptyProfile from "../../assets/imgs/empty-profile.svg";
import { usersStore } from '../../store/usersStore';
import Confirm from '../../components/Confirm/Confirm';

const UserListItem = ({ user, index, openUserForm, openTodoList }) => {
    const [confirmStatus, setConfirmStatus] = useState(false);
    const [confirmParams, setConfirmParams] = useState();


    const { setCurrentUser, currentUser, deleteUser } = usersStore();
    const {name, email} = user;

    //let msg, title, okeyCallBack ;

    const deleteChoosenUser = () => {
        deleteUser();
        setConfirmStatus(false);
    }

    const editChoosenUser = () => {
        openUserForm();
        setConfirmStatus(false);
    }

    const handleDeleteUser = () => {
        setCurrentUser(user);
        setConfirmParams({msg: "Siliyorum", title: "Delete okeymi?", okeyCallBack: deleteChoosenUser});
        setConfirmStatus(true);
    }

    const handleEditUser = () => {
        setCurrentUser(user);
        setConfirmParams({msg: "Editliyom", title: "Edit okeymi?", okeyCallBack: editChoosenUser});
        setConfirmStatus(true);
    }

  return (
    <div key={index}>
        <Card className="user">
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

                <IconButton onClick={() => handleDeleteUser()}>
                    <MdDelete/>
                </IconButton>

                <IconButton onClick={() => {setCurrentUser(user); openTodoList();}}>
                    <FcTodoList/>
                </IconButton>

                <IconButton onClick={() => handleEditUser()}>
                    <MoreVertIcon/>
                </IconButton>

            </CardActions>
        </Card>

        <Confirm open={confirmStatus} setOpen={setConfirmStatus} okeyCallBack={confirmParams?.okeyCallBack} msg={confirmParams?.msg} title={confirmParams?.title}/>
    </div>
  )
}

export default UserListItem;