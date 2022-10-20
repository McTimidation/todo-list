import InputForm from "./input";
import { useState } from 'react';

function ListItem({ task }) {
    
    return (
        <div className={task.complete ? 'strike' : ''}>
            {task}
            </div>
    )
}

export default ListItem;