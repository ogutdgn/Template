import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { usersStore } from '../../store/usersStore';
import { TextField } from '@mui/material';

const UserForm = ({ currentUser, divRef }) => {

    const { addOrChangeUser } = usersStore();

    const [newUserData, setNewUserData] = useState({
        name: "",
        username: "",
        email: "",
    })

    const [updateUserData, setUpdateUserData] = useState({
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
    })

    useEffect(() => {
        setUpdateUserData({
            name: currentUser.name,
            username: currentUser.username,
            email: currentUser.email,
        })
    }, [currentUser])


    const submitForm = (e) => {
        e.preventDefault();
        addOrChangeUser(newUserData, updateUserData, currentUser.id);
        setTimeout(() => {
            if(currentUser === false){
                divRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }
        }, 0);
    }   

    const formChanged = (e) => {
        currentUser ? 
        setUpdateUserData({ ...updateUserData, [e.target.id]: e.target.value})
        :
        setNewUserData({ ...newUserData, [e.target.id]: e.target.value})
    }



  return (
    <div>
        <Card className="addNewUserCard">
            <div className="newUserInfo">
                <form className="nameValues" onSubmit={submitForm}>
                    {/* <h5>{title}</h5> */}
                    
                    <input type="hidden" value={currentUser.id}/>
                    <div className="inputField">
                        <label htmlFor="">Name :</label>
                        <TextField id="name" label="Name" value={currentUser ? updateUserData.name : newUserData.name} onChange={formChanged}/>
                    </div>
    
                   
                    <div className="inputField">
                        <label htmlFor="">Username :</label>
                        <TextField id="username" label="Username" value={currentUser ? updateUserData.username : newUserData.username} onChange={formChanged}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Age :</label>
                        <TextField label="Age"/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Email :</label>
                        <TextField id="email" label="Email" value={currentUser ? updateUserData.email : newUserData.email} onChange={formChanged}/>
                    </div>

                    <div className="buttonDiv">
                        <button className="goBack">Go Back</button>
                        <input type="submit" value={"Submit"}/>
                    </div>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default UserForm