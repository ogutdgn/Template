import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { usersStore } from '../../store/usersStore';
import { TextField } from '@mui/material';

const UserForm = ({ currentUser }) => {


  return (
    <div>
        <Card className="addNewUserCard">
            <div className="newUserInfo">
                <form className="nameValues">
                    {/* <h5>{title}</h5> */}
                    
                    <input type="hidden"/>
                    <div className="inputField">
                        <label htmlFor="">Name :</label>
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Name" value={currentUser ? currentUser.name : ""}/>
                    </div>
    
                   
                    <div className="inputField">
                        <label htmlFor="">Username :</label>
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Username" value={currentUser ? currentUser.username : ""}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Age :</label>
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Age" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Email :</label>
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Email" value={currentUser ? currentUser.email : ""}/>
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