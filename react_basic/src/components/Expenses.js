import React from 'react'
import ExpenseItems from './ExpenseItems';
import '../custom.css'

function Expenses() {
    const expenseArray = [
        {
            EXpId: 1,
            title: "Car",
            price: 2000,
            date: new Date().toLocaleDateString()
        },
        {
            EXpId: 2,
            title: "Bike",
            price: 500,
            date: new Date().toLocaleDateString()
        },

    ]
    return (
        <div className = "expenses_container">
             <ExpenseItems
              title = {expenseArray[0].title}
              price = { expenseArray[0].price} 
              date = { expenseArray[0].date}/> 
              
              <ExpenseItems 
              title = {expenseArray[1].title}
              price = { expenseArray[1].price} 
              date = { expenseArray[1].date}/> 
          
        </div>
    )
}

export default Expenses
