import React from 'react'

function TodoItemComponent({allTodo,setAllTodo}) {
  function handleRemove(id){
let newArray = allTodo.filter(item=>item.id!==id)
setAllTodo(newArray)
  }
  return (
    <div className='flex flex-col gap-3 '>
      {allTodo.map((item,i)=>{
        return <div key={item.id} className='flex justify-between items-center bg-black/10 p-2 dark:bg-black/70 dark:text-white'>
          <h3>{item.title}</h3>
          <button onClick={()=>{handleRemove(item.id)}} className='border p-1 border-red-600 dark:border-white '>Remove</button>
        </div>
      })}
    </div>
  )
}

export default TodoItemComponent