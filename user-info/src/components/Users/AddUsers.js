import React, {useState} from 'react'
import Card from '../UI/Card';
import UserButton from '../UI/UserButton';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../../helper/Wrapper';

import './AddUser.css'

function AddUsers(props) {
    const formSubmitHandler = (event) => {
        event.preventDefault();
        //input validation
        if( userName.trim().length === 0 || userAge.trim().length === 0 ) {
            setError( {
                title : "Invalid input",
                message : "please provide correct information"
            });
            return ;
        }
        if(+userAge < 1) {
            setError( {
                title : "Invalid Age",
                message : "please provide age greater then 1"
            });
            return; }
        console.log(`username: ${userName} and age: ${userAge}`);
        SetUserAge('');
        SetUserName('');

        props.onAddUser(userName, userAge);
    }
    const [userName, SetUserName] = useState('');
    const [userAge, SetUserAge] = useState('');
    const [error , setError] = useState();
    
    const nameChangeHandler = (event) => { SetUserName(event.target.value) };
    const ageChangeHandler = (event) => {  SetUserAge(event.target.value) };
    const errorHandler = () => { setError(null)}


    return (
        <Wrapper>
         { error &&   <ErrorModel title= {error.title} 
                       message= {error.message}
                       onConfirm = {errorHandler} />
         }
            <Card>
                <form onSubmit={formSubmitHandler}  className="userForm ">
                    <div>
                        <label htmlFor="username" > Name</label>
                        <input id="username" type="text" value={userName} onChange = { nameChangeHandler}
                         placeholder="Enter Your Name"/>
                    </div>
                    <div>
                        <label htmlFor="age" > Age</label>
                        <input id="age" type="number" value={userAge} onChange= {ageChangeHandler}
                          placeholder="Enter Your Age" />
                    </div>
                    <UserButton type="submit"> Add User</UserButton>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUsers
