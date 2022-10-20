import React from 'react';
import { useState, useEffect } from 'react';
import  ListItem from './ListItem';




function InputForm({ AddTask, toDoList, setToDoList }) {
    const [value, setValue] = useState('');



    return (
        <>
            <input id="input" onChange={(e) => setValue(e.target.value)}></input>
            <button className="" onClick={e => {
                AddTask(value);
            }}
            >Add</button>
        </>
    )
}

export default InputForm;