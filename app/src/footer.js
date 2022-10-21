import React from 'react';
import { useState } from 'react';




function Footer({ setView, toDoList, setToDoList, view }) {

    function handleClick(e) {
        console.log('I got clicked')
        const unchecked = toDoList.filter(x => !x.complete);
        const checked = toDoList.filter(x => !x.complete)
        const all = [...toDoList];
        const id = e.target.id;
        setView(id)
        switch (view) {
            case 'todos':
                setToDoList(unchecked)
                break;
            case 'complete':
                setToDoList(checked)
                break;
            case 'all':
                setToDoList(all);
        }
    }





    return (
        <div className='row'>
            <button id="all" className='col' onClick={e => handleClick(e)}>All</button>
            <button id='todos' className='col' onClick={e => handleClick(e)}>To Do</button>
            <button id='completed' className='col' onClick={e => handleClick(e)}>Completed</button>
        </div>
    )
}

export default Footer;