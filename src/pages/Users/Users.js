import * as React from 'react';
import { useEffect, useState } from 'react'
import AlertDialog from '../../components/Alert/Alert';
import Layout from '../../components/Layout/Layout';
import { usersStore } from '../../store/usersStore';
import "./Users.css";
import User from './User';
import UserTodos from './UserTodos';


export default function UserCard() {

    const { fetchUsers, users, error } = usersStore();
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        fetchUsers();
      }, [fetchUsers])

      const handleUserClicked = (username) => {
        // console.log(username);
        setCurrentUser(username);
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
          {
            users && users.map((user) => {
              return(
                <User username={user.name} useremail={user.email} detailCallback={handleUserClicked}/>
              )
            })
          }
        </div>
          {       
            currentUser && <UserTodos username={currentUser}/>
          }
        </div>
    </Layout>
  );
}
