import React, {useContext} from 'react'
import CardIcon from '../Cart/CardIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderButton.module.css'

function HeaderButton(props) {

   const cartCtx = useContext(CartContext)
   const numberOfItems = cartCtx.items.reduce( (curNum, item) => {
       return curNum + item.amount
   },0)
    return (
        <button className= {classes.button} onClick={props.onClick}>
            <span className={classes.icon}> <CardIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}> {numberOfItems} </span>
            
        </button>
    )
}

export default HeaderButton
