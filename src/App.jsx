
import { useState } from 'react'
import './App.css'
import ToggleMode from './components/ToggleMode'
import TitleComponent from './components/TitleComponent'
import TodoInputComponent from './components/TodoInputComponent'
import TodoItemComponent from './components/TodoItemComponent'

function App() {
const[darkMode,setDarkMode]=useState(false) 
const [allTodo,setAllTodo] = useState([])

console.log(allTodo);

  return <div className={`${darkMode?'dark':'light'}`}>
      <TitleComponent>
      <h1 className='text-center text-2xl my-3 bg-black/10 dark:bg-black/70 dark:text-white'>TODO App</h1>
      </TitleComponent>
     
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className='flex justify-evenly gap-9 items-center'>
        <div className="todo">

         <TitleComponent>
         <h2 className='dark:bg-black/70 bg-black/10 dark:text-white p-2 text-center'>Todo</h2>
         </TitleComponent>
         <TodoInputComponent  allTodo={allTodo} setAllTodo={setAllTodo}/>
         <div className='flex flex-col'>
          <TodoItemComponent allTodo={allTodo} setAllTodo={setAllTodo}/>
         </div>
        </div>
        <TitleComponent>
        <h2 className='dark:bg-black/70 bg-black/10 dark:text-white p-2'>All Products</h2>
        </TitleComponent>



        
      </div>
    </div>
  
}

export default App
