import React, {useContext} from 'react'
import CartContext from '../../../store/cart-context'
import ItemForm from './ItemForm'
import classes from './MealItem.module.css'


function MealItem(props) {
    const cartCtx = useContext(CartContext)
    const itemPrice = `Rs ${props.meal.price.toFixed(2)}`;
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name : props.meal.name,
            price : props.meal.price,
            amount : amount
        })
    }
    return (
        <React.Fragment>
            <li className={classes.meals}>
                <div>
                    <h3> {props.meal.name}</h3> 
                    <div className={classes.ItemPrice}> {itemPrice}</div>
                </div>
                <div>
                    <ItemForm onAddToCart={addToCartHandler}/>
                </div>
            </li> <hr/>            
        </React.Fragment>
    )
}

export default MealItem
