
import Image from "next/image";


const Projects = ()=>{
    
const projects = [

    {
        id :1
        ,
        src :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    }
    ,
    
    {
        id :2
        ,
        src :"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    }
    ,
    {
        id :3
        ,
        src :"https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    }
    ,
    {
        id :4
        ,
        src :"https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
    }
]
    

    return<div name="portfolio" id="2" className="mt-20 bg-gradient-to-b from-black-to-gray-800 w-full text-white md:h-screen">


            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                   <div className="text-center pb-8">
                   <h2 className=' text-center mt-20 mb-3 text-3xl inline border-b-4 border-green-700  text-green-600 font-medium md:text-4xl'>PROJECTS</h2>
                   <p className='mx-auto mb-10 text-gray-900 mt-6 dark:text-white'>Feel free to browse through some of my work below.</p>
                   </div>
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                 
                 { projects.map(({id,src})=>
                    <div key = {id} className=" shadow-md shadow-gray-600 rounded-lg">
                         <Image src = {src} className="rounded-md duration-200 hover:scale-105"alt = ""/>
                         <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-gray-800 dark:text-white hover:text-green-600">Demo</button>
                            <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-gray-800 dark:text-white hover:text-green-600">Code</button>
                         </div>
                    </div>
                 )  }
                   
            </div>

            </div>
        



        </div>
}

export default Projects;