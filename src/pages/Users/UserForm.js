import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { usersStore } from '../../store/usersStore';

const UserForm = ({ goBack, detailCallBack }) => {

    const { addUser } = usersStore();

    const [name, setName] = useState();
    const [userName, setUserName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, userName, email, age);
    }

  return (
    <div>
        <Card className="addNewUserCard">
            <div className="newUserInfo">
                <form className="nameValues" onSubmit={handleSubmit}>
                    <h5>Add New User</h5>
                    <div className="inputField">
                        <label htmlFor="">Name :</label>
                        <input type="text" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Username :</label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Age :</label>
                        <input type="number" onChange={(e) => setAge(e.target.value)}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="">Email :</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="buttonDiv">
                        <button className="goBack" onClick={goBack}>Go Back</button>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default UserForm