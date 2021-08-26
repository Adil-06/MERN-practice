import React ,{useState} from 'react'
import ExpenseItem from './ExpenseItems'
import ExpenseFilter from './UserInput/ExpenseFilter'

import '../custom.css'

function UserItem(props) {
    //console.log("useritem:" , props.items)
      
    // for expense filter
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    // const filterExpense = props.items.filter((expenseByYear) => {
    //    // return expenseByYear.date
    //     return expenseByYear.date.getFullYear().toString()  === filteredYear
    // })
    // console.log("filter data by year is:", filterExpense)

    return (
        <div className="expenses_container">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            {props.items.map((expense, index) => (
                <ExpenseItem
                    key={index}
                    title={expense.title.toUpperCase()}
                    price={expense.price}
                    date={expense.date}
                />
            ))}
        </div>
    )
}

export default UserItem
