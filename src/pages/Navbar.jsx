import React, { useState } from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import { AiOutlineClose,AiOutlineMenu, } from "react-icons/ai"; 
import { Link } from "react-scroll";

const Navbar = (props)=>{


const [ nav, setNav] = useState(false);
const [sideBar,setSideBar] = useState(false);

const handleNav = ()=>{
    
    setNav(!nav)
  
} 
const handleSideBar=()=>{
 setNav(!nav)
}

    return(
      <div class=" py-0.5 px-6 fixed top-0 w-full bg-green-400 text-white  md:w-full md:py-2 md:px-6">
     <nav class="flex justify-between max-w-7xl mx-auto py-5 ">
    <h1 className=' text-xl font-burtons text-black'>SDEV</h1>
             
    <div className='flex'>
        <div className="flex" >
           <ul className='hidden md:flex '>
              <li className='ml-8 hover:text-green-600 duration-200 hover:scale-125 cursor-pointer'><Link className="md:text-black"to ={0} spy={true} smooth={true} offset={-300} duration={500} >HOME</Link></li>
              <li className='ml-8 hover:text-green-600 duration-200 hover:scale-125 cursor-pointer'><Link className="md:text-black"to ={1} spy={true} smooth={true} offset={-300} duration={500} >ABOUT</Link></li>
              <li className='ml-8 hover:text-green-600 duration-200 hover:scale-125 cursor-pointer'><Link className="md:text-black"to ={2} spy={true} smooth={true} offset={-100} duration={500} >PROJECTS</Link></li>
              <li className='ml-8 hover:text-green-600 duration-200 hover:scale-125 cursor-pointer'><Link className="md:text-black"to ={3} spy={true} smooth={true} offset={-50} duration={500} >CONTACT</Link></li>
              <li><Link  className  ='ml-8 bg-gradient-to-r from-green-500 to-teal-500  text-white px-2 py-1 rounded-md'>RESUME</Link></li>
            </ul>
            <div onClick = {handleNav} className="md:hidden">
               { nav? <AiOutlineClose size = {25} className=' text-black dark:text-black'/> :<AiOutlineMenu size ={25} className=' text-black'/>}
            </div>
        </div>
        <div>
    
        
        
        <ul classsName="flex items-center">
              <li><BsFillMoonStarsFill  onClick ={props.darkModeHandler}  size={22} className=' cursor-pointer text-xl ml-8 hover:text-green-600'/></li>
              <li><Link  className  =' hidden md:bg-gradient-to-r from-green-500 to-teal-500  text-white px-2 py-1 rounded-md'>RESUME</Link></li>
            </ul>
            

           <div className={nav?"fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900  bg-green-400 ease-in-out duration-500 md:hidden ":"fixed left-[-100%]"}>
            <h1 className=' text-xl font-burtons m-4'>SDEV</h1>
            <ul className=" text-center">
            <li  className=' p-4 border-b border-gray-600 hover:text-black cursor-pointer '><Link onClick={handleSideBar} to ={0} spy={true} smooth={true} offset={-300} duration={500} >HOME</Link></li>
              <li className=' p-4 border-b border-gray-600 hover:text-black cursor-pointer'><Link onClick={handleSideBar} to ={1} spy={true} smooth={true} offset={-300} duration={500} >ABOUT</Link></li>
              <li className=' p-4 border-b border-gray-600 hover:text-black cursor-pointer'><Link onClick={handleSideBar} to ={2} spy={true} smooth={true} offset={-100} duration={500} >PROJECTS</Link></li>
              <li className=' p-4 mb-10 border-b border-gray-600 hover:text-black cursor-pointer'><Link onClick={handleSideBar} to ={3} spy={true} smooth={true} offset={-50} duration={500} >CONTACT</Link></li>
              <li><Link className  ='bg-gradient-to-r from-green-500 to-teal-500  text-white px-2 py-1 rounded-md'>RESUME</Link></li>
      
              </ul>
        </div>
       
        </div>
        
    </div>

    </nav>
    </div>

    )
}

export default Navbar;