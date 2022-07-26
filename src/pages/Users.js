import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import { usersStore } from '../store/usersStore';

const Users = () => {
  const { fetchUsers, users, error } = usersStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])

   
  // console.log(users);

  return (
    <Layout error={error}>

      <div>
        <div>
          {
            error
          }
        </div>
        {
          users && users.map((user) => (
            <p key={user.name}>{user.name}</p>
          ))
        }
      </div>
    </Layout>
  )
}

export default Users