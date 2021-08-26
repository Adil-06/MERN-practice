import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import UserButton from './UserButton'
import classes from './ErrorModel.module.css'
import './Card.css'


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}> </div>
};

function ErrorModel(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} /> ,
                document.getElementById("backdrop")
            )}
            <Card className="card">
                <div className={classes.modal}>

                    <header className={classes.header}>
                        <h2> {props.title} </h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={classes.actions}>
                        <UserButton onClick={props.onConfirm}>OKAY</UserButton>
                    </footer>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default ErrorModel
