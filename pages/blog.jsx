import React,{useState,useEffect} from "react"
import axios from "axios"
import Link from "next/link"


function Blogs(){

    const [blogs,setBlogs] = useState([])

  const blogRequest = ()=>{
    const token = localStorage.getItem("accessToken")
    let getToken;
    if(token){
        getToken = JSON.parse(token)
    }
    axios.get("/api/allBlogs",{headers:{'Authorization':`Bearer ${getToken}`}}).then((res)=>{
      console.log(res.data); 
      setBlogs(res.data.posts)
    }
      ).catch((err)=>{
        console.log(err)
      })
  
  }

  useEffect(()=>{
blogRequest();
  },[])
    return(
        <>

        <h1 className="text-3xl ml-[50px]">Popular Topics</h1>

        <div className="flex items-center justify-center mt-[30px]">
        <div className="grid grid-cols-4 gap-4">
  
  {
    blogs.map((blog)=>{
      return(
        <div className="w-[270px]">
         <div>
            <img src={blog?.image} className="w-full h-[250px] rounded-xl"/>
         </div>
         <div>
        <h1 className="font-bold mt-[10px]  ">{blog?.title}</h1>
        <p className="text-sm mt-[10px]">{blog?.content?.substring(0,60)}</p>
         </div>

         <div>
          <Link href={`${blog?._id}`}> <button className="bg-[#106261] text-white p-2 rounded-md mt-[20px]">View more</button></Link>
         
         </div>
        
        </div>
      )
    })
  }
</div>
        </div>
       
        </>
    )
}

export default Blogs