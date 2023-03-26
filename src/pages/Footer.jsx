import React,{useState} from "react";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillGithub} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import Copyright from "./Copyright";
import Link from 'next/link';


const Footer =()=>{




    return<div className="w-full h-full mx-auto gap-8 text-black shadow-2xl bg-green-500 ">
<div className=" flex flex-col justify-between mb-10 md:flex-row">
   <div className="max-auto w-full px-5 justify-center">
    <h1 className='inline-block pl-[25%] md:px-20  py-3 mt-20 ml-20 text-2xl font-burtons '>SDEV</h1>
    <p className="flex px-2 max-w-md text-center">If you need programming or design content services, I am a freelancer ready to help. Let's collaborate and get started today!</p>
  </div>
  <div>
  <h1 className=' inline-block pl-[41%] md:px-20 py-3 mt-20 md:ml-20 text-2xl font-burtons md:mr-20 '>SOCIAL</h1>
  <div className="flex max-auto w-full px-5">
            <AiFillTwitterCircle onClick={()=>  window.open('https://twitter.com/souley_td')}  size= {30} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2  '/>
             <AiFillLinkedin onClick={()=>  window.open('https://www.linkedin.com/in/souleymanedjibrine/')} size= {30} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2  '/>
            <AiFillInstagram onClick={()=>  window.open('https://www.instagram.com/s.dev___/')} size= {30} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2  '/>
            <AiFillGithub  onClick={()=>  window.open('https://github.com/Souleymane2024')}size= {30} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2  '/>
          <BsFacebook onClick={()=>  window.open('https://www.facebook.com/souleymane.djibrine/')}  size= {30} className=' hover:text-white duration-150 hover:scale-125 mt-5 ml-3 mr-2  '/>
          </div>
      
  </div>
</div>
  <Copyright/>
    </div>
}

export default Footer;