import InputForm from "./input";
import { useState, useEffect } from 'react';

function ListItem({ task, setToDoList, toDoList, id, complete }) {


    function ClickToggle({ id }) {
        let toggled = toDoList.map(task => {
        return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        
        })
        setToDoList(toggled);
        
}

function RemoveItem({ id }) {
    setToDoList(toDoList.filter(t => 
        t.id !== id
    ))
}





    return (

        <div className={complete ? 'strike' : ''}>
            <input id={id} className="form-check-input" type="checkbox" value="" onClick={(e) => ClickToggle({id})}></input>
            {task} 
            <button type="button" className="btn-close" aria-label="Close" onClick={(e) => RemoveItem({id})}></button>
        </div>
    )

}

export default ListItem;