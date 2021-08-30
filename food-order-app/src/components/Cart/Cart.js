import React, {useContext} from 'react'
import Model from '../UI/Model';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css'

function Cart(props) {
    const cartCtx = useContext(CartContext)
    const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
    const cartItemRemoveHandler = id => {}
    const cartItemAddHandler = item => {}
    const hasItems = cartCtx.items.length > 0
    //const cartItemArray = [{ id:'c1', name : 'Burger' , amount : 2, price : 250 }]
    const cartItems = (
        <ul className={classes.cartItems}>
            {cartCtx.items.map((item) => (
              <CartItem key={item.id}
               name ={item.name}   amount ={item.amount}   price ={item.price} 
               onRemove = {cartItemRemoveHandler.bind(null, item.id)}
               onAdd= { cartItemAddHandler.bind(null,item)}/>)
            )}
        </ul>
    );
    return (
        <Model>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.btnClose} onClick={props.onCloseCart}>Close</button>
               {hasItems && <button className={classes.button}>Order</button> }
            </div>
            
        </Model>
    )
}

export default Cart
