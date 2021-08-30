import React, {useRef, useState} from 'react'
import classes from './ItemForm.module.css'
import Input from '../../UI/Input'

function ItemForm(props) {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enterAmountNumber = + enteredAmount;
        if(enteredAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5 ) {
            setAmountValid(false);
            return;
        }
        props.onAddToCart(enterAmountNumber)
    }
    return (
        <React.Fragment>
            <form className={classes.form } onSubmit= {submitHandler}>
                <Input lable='Amount'  ref ={ amountInputRef}
                    input={{
                        id: "amount",  type: "number",  min: '1',  max: '5',
                        step: '1', defaultValue: '1'
                    }}/>
                <button> + Add </button>
                { !amountIsValid && <p>Please enter a Valid amount (1-5)</p>}
            </form>
            
        </React.Fragment>
    )
}

export default ItemForm
