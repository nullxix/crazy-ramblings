import React from 'react'



export default function Form(props){
    const {data, title, handleChange} = props

    return (
        <form>
            <div>
                <span>
                    <label for='data'>Data:</label>
                </span>
                <span>
                    <input name='data' value={data} onChange={handleChange}/>
                </span>
            </div>
            <div>
                <span>
                    <label for='title'>Title:</label>
                </span>
                <span>
                    <input name='title' value={title} onChange={handleChange}/>
                </span>
            </div>
        </form>
    )

}