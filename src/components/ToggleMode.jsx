import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";


function ToggleMode({darkMode,setDarkMode}) {

    function handleMode(){
        setDarkMode(!darkMode)
    }


  return (
    <div onClick={handleMode} className='flex justify-center my-3 cursor-pointer'>
        {darkMode?<FaRegSun size={42}/>:<MdDarkMode size={42}/>}
    </div>
  )
}

export default ToggleMode