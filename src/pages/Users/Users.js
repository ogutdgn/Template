import * as React from 'react';
import { useEffect } from 'react'
import AlertDialog from '../../components/Alert/Alert';
import Layout from '../../components/Layout/Layout';
import { usersStore } from '../../store/usersStore';
import "./Users.css";
import User from './User';


export default function UserCard() {

    const { fetchUsers, users, error } = usersStore();

    useEffect(() => {
        fetchUsers();
      }, [fetchUsers])


  return (
    <Layout>
      <div>
        {
          error && <AlertDialog/>
        }
      </div>

      <div className="users">
        {
          users && users.map((user) => {
            return(  
                <User username={user.name} useremail={user.email}/>
            )
          })
        }
      </div>
    </Layout>
  );
}
