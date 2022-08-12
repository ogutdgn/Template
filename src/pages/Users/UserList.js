import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import AlertDialog from '../../components/Alert/Alert';
import { usersStore } from '../../store/usersStore';
import "./Users.css";
import UserListItem from './UserListItem';
import UserTodos from './UserTodos';
import UserForm from './UserForm';


const UserList = () => {

  const { fetchUsers, users, error, currentUser, setCurrentUser } = usersStore();
  const [userForm, setUserForm] = useState(false);
  const [todoList, setTodoList] = useState(true);

  useEffect(() => {
      fetchUsers();
    }, [fetchUsers])
  
  const divRef = useRef(null);

  const openTodoList = () => {
    setTodoList(true);
    setUserForm(false);
  }

  const openUserForm = () => {
    setTodoList(false);
    setUserForm(true);
  }

  const addNewUser = () => {
    setCurrentUser(false);
    openUserForm();
  }
  
  return (
    <div>
      <div>
        {
          error && <AlertDialog/>
        }
      </div>

      <div className="userTodos" ref={divRef}>
        <div className="users">
          <div className="newUserButton">
            <button className="addNewUser" onClick={addNewUser}>Add User</button>
          </div>
          {
            users && users.map((user, index) => {
              return(
                <UserListItem openTodoList={openTodoList} openUserForm={openUserForm} user={user} index={index} currentUser={currentUser}/>
              )
            })
          }
        </div>
          {
            todoList && <UserTodos currentUser={currentUser}/>
          }
          {
            userForm && <UserForm setTodoList={setTodoList} setUserForm={setUserForm} currentUser={currentUser} divRef={divRef}/>
          }
        </div>
      </div>
  );
}

export default UserList;
