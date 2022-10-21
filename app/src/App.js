import { resetWarningCache } from 'prop-types';
import React, { useEffect, useState } from 'react';
import InputForm from './input';
import ListGroup from './ListGroup';
import Footer from './footer';


function App() {
    const [state, setState] = useState([]);
    const [toDoList, setToDoList] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) ||
        []
    });
    const [ view, setView ] = useState('all');


    
   
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

    let renderedTodos = toDoList;
    if (view === 'todos') {
        renderedTodos = toDoList.filter(x => !x.complete);
    } else if (view === 'complete') {
        renderedTodos = toDoList.filter(x => x.complete);
    }

    return (
        <div id="header" className='text-center'>
            <h1>To Do List</h1>
            
            <InputForm 
            AddTask={AddTask} 
            toDoList={toDoList} 
            setToDoList={setToDoList}
            />
            <ListGroup 
            setToDoList={setToDoList} 
            toDoList={renderedTodos}
            />
            <Footer 
            toDoList={toDoList} 
            setToDoList={setToDoList} 
            state={state} 
            setState={setState} 
            setView={setView}
            />

        </div>

    )
}

export default App;







