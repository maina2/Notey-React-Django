import React, { useState } from 'react'

export const Counter = () => {
   const [count,setCount] = useState<number>(1);
    

    const handleAddition =()=>{
        if(count>=0){
            setCount( count+1)
        }
        
    }
    const handleReduction= ()=>{
        if(count>0)
        setCount( count-1)
    }
  return (
    <div>
        <button onClick={handleAddition}>+</button>
        {count}
        <button onClick={handleReduction}>-</button>
    </div>
  )
}
