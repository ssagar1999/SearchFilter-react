import React, { useState } from 'react'


function Counter() {
    let [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>
            {counter}
        </h1>
        <button onClick={() =>setCounter(counter +1)}>+</button>
        <button onClick={() =>setCounter(counter -1)}>-</button>
    </div>
  )
}

export default Counter