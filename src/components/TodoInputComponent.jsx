import React, { useState } from 'react'

function TodoInputComponent({allTodo,setAllTodo}) {
  const[inputValue,setInputValue]=useState('')

    function handleInputValue(e){
      setInputValue(e.target.value);
    }

    function handleTodo(){
      setAllTodo([...allTodo,{id:new Date().getTime(),title:inputValue}])
      setInputValue('')
    }

  return (
    <div className='mb-8'>
        <input onChange={handleInputValue} value={inputValue} className='border px-2 py-1' type="text" placeholder='Add new TODO' name="" id="" />
        <button onClick={handleTodo}  className='border border-red-600 text-red-600 px-2 py-1'>Add TODO</button>
        <br />
     
    </div>
  )
}

export default TodoInputComponent