import React,{useState} from "react";



const Contact = ()=>{

    return <div id = "3" name ="contact" className="mt-20   w-full h-screen bg-gradient-to-b  from-green-500 to-green-300 p-4 text-white">
        <div className=" text-center flex flex-col p-4  justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
            <h2 className=' text-center mt-20 mb-3 text-3xl inline border-b-4 border-green-900  text-black font-medium md:text-4xl'>CONTACT</h2>
            <p className='mx-auto mb-10 text-gray-900 mt-6'>Submit the form below to get in touch with me.</p>
            </div>
            <div>
                <form action ="https://getform.io/f/71c91212-b47f-4efe-9ca6-a0d90b54bbb4"   method ="POST" className="mx-auto flex flex-col w-full md:w-1/2">
                <input type = "text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                <input type = "text" name="email" placeholder="Enter your email" className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                <textarea  name="message" placeholder="Enter your message" rows= "10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" ></textarea>
                <button className=" text-white bg-gradient-to-b from-blue-500 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                    Let's talk
                </button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact;