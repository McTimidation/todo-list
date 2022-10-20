import React from 'react';
import { useState } from 'react';
import InputForm from './input';
import ListGroup from './ListGroup';


function App() {
    const [state, setState] = useState('login')
    const [toDoList, setToDoList] = useState([]);
    // const [nextId, setNextId] = useState(0);

    function AddTask(value) {
        console.log(toDoList, 'AddTask')
        setToDoList([...toDoList, {id: Date.now(), task: value, complete: false}])

    }
    return (
        <div id="header" className='text-center'>
            <h1>To Do List</h1>
            
            <InputForm AddTask={AddTask} toDoList={toDoList} setToDoList={setToDoList}/>
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