import React, { useEffect } from 'react'
import { usersStore } from '../store/usersStore';

const Users = () => {
  const { fetchUsers, users } = usersStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])
  
  // console.log(users);

  return (
    <div>
      {
        users && users.map((user) => (
          <p>{user.name}</p>
        ))
      }
    </div>
  )
}

export default Users