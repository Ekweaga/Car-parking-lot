
import React,{useState,useEffect} from "react"
import axios from "axios"

function Recovery (){

  const [email,setEmail] = useState('')
  

    const submit = (e)=>{
      e.preventDefault();
      console.log(email)
    axios.post("/api/generateotp",{
            method:"POST",
            body:{
               
               email:email
            },
       headers:{
                "Content-Type":"application/json"
            }
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
return(
    <>
 

        

 <div className="flex flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Recover Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit}>

    
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
             
                  type="email"
              
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

        
            <div>
              <button
                type="submit"
                onClick={submit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>

        
    
    </>
)
}

export default Recovery;