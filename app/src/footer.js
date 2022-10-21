import React from 'react';
import { useState } from 'react';


// function handleClick(e) {
//     this.setState({value:e.target.value});
//     console.log(e.target.id)
//     // const id = e.target.id;
//     // setView(id)
// }


function Footer({ setView, toDoList, setToDoList, state, setState}) {





    return (
        <div className='row'>
            <button id="all" className='col' onClick={(e) => setView(e.target.id)}>All</button>
            <button id='todos' className='col' onClick={(e) => setView(e.target.id)}>To Do</button>
            <button id='completed' className='col' onClick={(e) => setView(e.target.id)}>Completed</button>
        </div>
    )
}

export default Footer;