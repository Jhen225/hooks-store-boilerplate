import React from 'react'
import { useCount, useIncrement, useDecrement } from './actions/counter'; 

export default function Counter (props) {
    
    const count = useCount();
    const inc = useIncrement();
    const dec = useDecrement();

    return (
        <div>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>
        </div>
    )
}