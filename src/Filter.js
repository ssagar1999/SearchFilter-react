import React, { useState } from 'react'

function Filter(props) {
    let [inputVal, setInputVal]=useState('')
    function handleClick(e){
          setInputVal(e.target.value)
    }
    let filteredArr = props.arr.filter(v => v.includes(inputVal))
  return (
    <div>

        <input value={inputVal} onChange={handleClick} />
        {filteredArr.map(v =>{
            return (
                <h1>
                    {v}
                </h1>
            )
        })}
    </div>
  )
}

export default Filter