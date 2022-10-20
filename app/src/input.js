import React from 'react';
import { useState } from 'react';
import  ListItem from './ListItem';




function InputForm(props) {
    
    return (
        <>
            <input value={props.userInput}></input>
            <button className="addBtn" >Add</button>
        </>
    )
}

export default InputForm;