import React from 'react'

function ExpenseItems( props) {
    // const month = props.date.toLocaleString('en-US', {month : 'long'});
    // const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    // const year = props.date.getFullYear()
   
    return (
        <div className="expense-item">
             <div className="expense-item__date">
                <p>{props.date}</p>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>         
            <div className="expense-item__price">
                <p>$ { props.price}</p>
            </div>
        </div>
    )
}

export default ExpenseItems
