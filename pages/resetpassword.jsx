
import React,{useState,useEffect} from "react"
import axios from "axios"

function ResetPwd (){

  const [email,setEmail] = useState('')
  const [username,setUser] = useState('')
  const [password,setPassword] = useState('')

    const submit = (e)=>{
      e.preventDefault();
      console.log(username,email,password)
    axios.post("/api/signup",{
            method:"POST",
            body:{
               username:username,
               email:email,
               password:password
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
           Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
          <div>
              
              <div className="mt-2">
                <input
                  id="password"
             
                  type="password"
                  
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            

            <div>
              
              <div className="mt-2">
                <input
                  id="password"
             
                  type="password"
                  
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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

export default ResetPwd;