import React from "react";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillGithub} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";

//react social media icons onCLick functions
const twitter = ()=>{
  window.open('https://twitter.com/souley_td')
}
const linkedin = ()=>{
  window.open('https://www.linkedin.com/in/souleymanedjibrine/')
}
const instagram = ()=>{
  window.open('https://www.instagram.com/s.dev___/')
}
const github = ()=>{
  window.open('https://github.com/Souleymane2024')
}
const facebook = ()=>{
  window.open('https://www.facebook.com/souleymane.djibrine/')
}

const Sidebar = ()=>{

    return (
        <div>

        <div  className='hidden md:block fixed top-40 left-[-0.25%] bg-green-300'>
             
             <AiFillTwitterCircle onClick={twitter} size= {40} className='hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
             <AiFillLinkedin onClick={linkedin} size= {40} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
            <AiFillInstagram onClick={instagram} size= {40} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
            <AiFillGithub onClick={github} size= {40} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
            <BsFacebook onClick={facebook} size= {40} className='mb-2 hover:text-green-600 duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
          </div>
        
          <div className="flex justify-center dark:text-white md:hidden">
            <AiFillTwitterCircle onClick={twitter} size= {30} className=' hover:text-green-600 duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
             <AiFillLinkedin onClick={linkedin} size= {30} className=' hover:text-green-600 duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
            <AiFillInstagram onClick={instagram} size= {30} className=' hover:text-green-600 duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
            <AiFillGithub onClick={github} size= {30} className=' hover:text-green-600 duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
          <BsFacebook onClick={facebook} size= {30} className=' hover:text-green-600  duration-150 hover:scale-125 mt-5 ml-3 mr-2   '/>
          </div>
          </div>
    )
}

export default Sidebar;