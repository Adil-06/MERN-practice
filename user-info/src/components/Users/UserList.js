import React from 'react'
import './UserList.css'

function UserList(props) {
    return (
        <div className="users_list">
            <ul>
                { props.users.map( (user, index) => (
                    <li key={index}>Name: {user.name} -- Age : {user.age} </li>
                ) )}
            </ul>
        </div>
    )
}

export default UserList
