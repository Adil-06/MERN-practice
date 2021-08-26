import React from 'react'
import '../Users/AddUser.css'

function UserButton(props) {
    return (
        <div>
            <button type= {props.type || "button"} 
            className="user_button"
            onClick= {props.onClick}>{props.children}
            </button>
        </div>
    )
}

export default UserButton
