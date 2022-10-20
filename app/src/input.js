import React from 'react';
import { useState } from 'react';
import  ListItem from './ListItem';




function InputForm({ AddTask, toDoList, setToDoList }) {
    const [value, setValue] = useState('');
    return (
        <>
            <input onChange={(e) => setValue(e.target.value)}></input>
            <button className="" onClick={() => AddTask(value)}>Add</button>
        </>
    )
}

export default InputForm;