import React from 'react'
import '../custom.css'

export default function hello( props) {
    return (
        <div>
            <h1 className="main-header">Hello {props.msg} </h1>
        </div>
    )
}
