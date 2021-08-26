import React, {useState} from 'react'
import UserExpense from './UserInput/UserExpense';
import UserItem from './UserItem';

import '../custom.css'

const dummyExpense = [
    {
        EXpId: 1,
        title: "Car",
        price: 2000,
        date: new Date("2020-2-2").toLocaleDateString()
    },
    {
        EXpId: 2,
        title: "Bike",
        price: 500,
        date: new Date("2019-3-4").toLocaleDateString()
    },

]

function Expenses() {
    const [expensesItem, setExpenses] = useState(dummyExpense);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
      };
  
    return (
        <div>
            <UserExpense onUserExpense={addExpenseHandler} />
            <UserItem items = {expensesItem}/>            
        </div>
    )
}

export default Expenses
