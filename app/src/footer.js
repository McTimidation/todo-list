import React from 'react';
import { useState } from 'react';

function Footer() {

    return (
        <div className='row'>
            <button className='col'>All</button>
            <button className='col'>To Do</button>
            <button className='col'>Completed</button>
        </div>
    )
}

export default Footer;