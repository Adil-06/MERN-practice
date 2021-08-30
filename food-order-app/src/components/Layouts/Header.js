import React from 'react'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
import food_bg_Image from '../../assets/meals.jpg'

function Header(props) {
    return (
        <React.Fragment>
            <header className ={classes.header}>
                <h1> Food Order App</h1>
                <HeaderButton onClick ={props.onShowCart} />
            </header>
            <div className={classes.mainImage}>
                <img src={food_bg_Image} alt="A Food order app "/>
            </div>            
         </React.Fragment>  
    )
}

export default Header
