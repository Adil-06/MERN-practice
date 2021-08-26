import React, {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (event) => { setEnterTitle(event.target.value)  }

    const priceChangeHandler = (event) => {  setEnterPrice(event.target.value)  }

    const dateChangeHandler = (event) => {  setEnterDate(event.target.value) }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enterTitle,
            price : enterPrice,
            date : new Date(enterDate).toLocaleDateString()
        }
        props.onSaveExpenseDate(expenseData)
      //  console.log('inside expense form',expenseData)
        setEnterPrice('');
        setEnterTitle('');
        setEnterDate('')
    }

    return (
        <div className="form_Container">
            <form onSubmit ={formSubmitHandler} >
                <div className="expense_controls">
                    <div className="expense_controls">
                        <label> Title</label>
                        <input type="text" value = {enterTitle}
                         onChange={titleChangeHandler} required />
                    </div>
                    <div className="expense_controls">
                        <label> Price</label>
                        <input type="number" value ={enterPrice} required
                         min='0.01' step="0.01" onChange={priceChangeHandler}/>
                    </div>
                    <div className="expense_controls">
                        <label> Date</label>
                        <input type="Date" value ={enterDate} required
                        min="2019-01-01" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div >
                    <button className="expense_btn" type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
