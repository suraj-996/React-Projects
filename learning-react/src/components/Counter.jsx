import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [counter,setCounter] = useState(0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>{
                setCounter(counter+1);
            }}>Add 1</button>
            <button  onClick={()=>{
               counter>0? setCounter(counter-1) : setCounter(0);
            }}>Subtract 1</button>
        </div>
    )
}

export default Counter