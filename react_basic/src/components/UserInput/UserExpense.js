import React from 'react'
import ExpenseForm from './ExpenseForm';

function UserExpense(props) {
     //receving data from expenseform
     const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.onUserExpense(expenseData);
        console.log('from User-Expense component', expenseData)
    }
    return (
        <div>
              <ExpenseForm  onSaveExpenseDate={saveExpenseDataHandler} />
        </div>
    )
}

export default UserExpense
