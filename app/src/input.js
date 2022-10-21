import React from 'react';
import { useState } from 'react';





function InputForm({ AddTask}) {
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