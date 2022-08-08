import * as React from 'react';
import { useEffect, useState } from 'react'
import AlertDialog from '../../components/Alert/Alert';
import Layout from '../../components/Layout/Layout';
import { usersStore } from '../../store/usersStore';
import "./Users.css";
import User from './User';
import UserTodos from './UserTodos';
import UserForm from './UserForm';


export default function UserCard() {

    const { fetchUsers, users, error } = usersStore();
    const [currentUser, setCurrentUser] = useState("Leanne Graham");
    const [formStatus, setFormStatus] = useState(false);

    useEffect(() => {
        fetchUsers();
      }, [fetchUsers])

    const handleUserClicked = (username) => {
      // console.log(username);
      setCurrentUser(username);
      if (formStatus === true){
        setFormStatus(!formStatus)
      }   
   }

    const handleNewUser = () => {
      if (formStatus === false){
        setFormStatus(!formStatus)
      }
      setCurrentUser()
    }

    const handleGoBack = () => {
      if (formStatus === true){
        setFormStatus(!formStatus)
      }   
      setCurrentUser("Leanne Graham")
    }

  return (
    <Layout>
      <div>
        {
          error && <AlertDialog/>
        }
      </div>

      <div className="userTodos">
        <div className="users">
          <div className="newUserButton">
            <button className="addNewUser" onClick={handleNewUser}>Add User</button>
          </div>
          {
            users && users.map((user) => {
              return(
                <User username={user.name} useremail={user.email} detailCallback={handleUserClicked} currentUser={currentUser}/>
              )
            })
          }
        </div>
          {/* {       
            currentUser && <UserTodos username={currentUser}/>
          } */}

          {
            formStatus ? <UserForm goBack={handleGoBack}/> : <UserTodos username={currentUser}/>
          }
        </div>
    </Layout>
  );
}
