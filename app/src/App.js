import React from 'react';
import { useState } from 'react';
import InputForm from './input';
import ListGroup from './ListGroup';


function App() {
    const [state, setState] = useState('login')
    const [toDoList, setToDoList] = useState([]);

    let nextId = 0;

    function addTask() {
        setToDoList([...toDoList, {id: nextId++, task: {task}, complete: false}])
    }
    function handleClick() {
        addTask();
    }
    return (
        <div id="header" className='text-center'>
            <h1>To Do List</h1>
            
            <InputForm handleClick={handleClick} userInput={userInput}/>
            <ListGroup toDoList={toDoList}/>

        </div>

    )
}

export default App;







{/*<h2 className="h3 mb-3 fw-normal">Please sign in</h2>
            <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="Psername"></input>
                <label for="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"></input>
                </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button> */}