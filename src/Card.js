import React from 'react'
import Form from './Form'

export default function Card(props){
    const {data, title, handleDelete} = props

    return (
        <center>
            <h1>{title}</h1>
            <h2>{data}</h2>
            <Form {...props}/>
            <button style={{color: 'red'}} onClick={handleDelete}>Delete</button>
        </center>
    )
}