import React from 'react';





function Footer({ setView, toDoList, setToDoList, view }) {

    function handleClick(e) {
        
        const id = e.target.id;
        setView(id)

    }



function allHandleClick(e) {
    // targets id of buttons
    if (e.target.id === 'checkAll'){
        // checks to see if every item has specified value
        if( toDoList.every(item => item.complete === true)) {
            // if true, flips that value
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