import React from 'react';
import { useState } from 'react';




function Footer({ setView, toDoList, setToDoList, view }) {

    function handleClick(e) {
        // const unchecked = toDoList.filter(x => !x.complete);
        // console.log(unchecked);
        // const checked = toDoList.filter(x => x.complete)
        // console.log(checked)
        // const all = [...toDoList];
        // console.log(all)
        const id = e.target.id;
        setView(id)
        // switch (id) {
        //     case 'todos':
        //         setToDoList(unchecked)
        //         break;
        //     case 'complete':
        //         setToDoList(checked)
        //         break;
        //     case 'all':
        //         setToDoList(all);
        // }
    }

function allHandleClick(e) {
    if (e.target.id === 'checkAll'){
        if( toDoList.every(item => item.complete === true)) {
            let uncheckAll = toDoList.map(task => {
                return {...task, complete: false} } ); 
                setToDoList(uncheckAll);
            } else {
                let allChecked = toDoList.map(task => {
                return {...task, complete: true}
                }); setToDoList(allChecked);
            }
    } else if (e.target.id === 'clearAll') {
        setToDoList([]);
    }
} 


    return (
        <div className='row'>
            <button id="checkAll" className='col' onClick={e => allHandleClick(e)}>Check All</button>
            <button id="all" className='col' onClick={e => handleClick(e)}>All</button>
            <button id='todos' className='col' onClick={e => handleClick(e)}>To Do</button>
            <button id='complete' className='col' onClick={e => handleClick(e)}>Completed</button>
            <button id="clearAll" className='col' onClick={e => allHandleClick(e)}>Clear List</button>
        </div>
    )
}

export default Footer;