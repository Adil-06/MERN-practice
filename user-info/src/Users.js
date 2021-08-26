import React, {useState} from 'react'
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function Users() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUserList( prevData => {
            return [...prevData,{name: uName, age: uAge}]
        })
    }
    return (
        <React.Fragment>
            <h1>User info app</h1>
            <AddUsers onAddUser= {addUserHandler} />
            <UserList users={userList} />
        </React.Fragment>
    )
}

export default Users
