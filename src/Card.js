import React from 'react'
import Form from './Form'

export default function Card(props){
    const {data, title} = props

    return (
        <center>
            <h1>{title}</h1>
            <h2>{data}</h2>
            <Form {...props}/>
        </center>
    )
}