import { resetWarningCache } from 'prop-types';
import React, { useEffect, useState } from 'react';
import InputForm from './input';
import ListGroup from './ListGroup';
import Footer from './footer';


function App() {
    const [toDoList, setToDoList] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) ||
        []
    });
    

   
useEffect(() => {
    
    localStorage.setItem('todos',JSON.stringify(toDoList))
}, [toDoList]);

    function AddTask(value) {
        setToDoList(
            [...toDoList, 
                {id: Date.now(), 
                    task: value, 
                    complete: false}])
    }

    return (
        <div id="header" className='text-center'>
            <h1>To Do List</h1>
            
            <InputForm AddTask={AddTask} toDoList={toDoList} setToDoList={setToDoList}/>
            <ListGroup setToDoList={setToDoList} toDoList={toDoList}/>
            <Footer toDoList={toDoList} setToDoList={setToDoList} />

        </div>

    )
}

export default App;







