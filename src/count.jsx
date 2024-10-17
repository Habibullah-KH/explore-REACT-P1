import './App.css'

import { useState } from "react";

export default function Counter(){

const [count, setcount] = useState(0);

const handleAdd = () =>{

    const newCount = count + 1;
    setcount(newCount)
}


const handleReduce = () =>{

    const newReduce = count -1;
    setcount(newReduce)
}


    return(
        <div style={
            {border: '2px solid #61dafbaa',
                margin: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
            }
            }>
            <h3>Counter: {count}</h3>
            <button className='btn' onClick={handleAdd}>Add</button>
            <button className='btn' onClick={handleReduce}>Reduce</button>
        </div>
    )
}














