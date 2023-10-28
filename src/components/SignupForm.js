import React from "react";
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
const SignupForm =({setIsLoggedIn}) =>{
    const navigate = useNavigate()
    const [formdata,setFormData] = useState({
       firstName:"",
       lastName:"",
       email:"",
       password:"",
       confirmPassword:""
    })
  
    const[showPassword,setShowPassword] = useState(false);
    const[showConfirmPassword,setShowConfirmPassword] = useState(false);


    const[accountType,setAccountType] = useState("student");
    function changeHandler(event){
      setFormData((prevData) =>(
          {
              ...prevData,
              [event.target.name]:event.target.value
          }
      ))
    }

    function submitHandler(event){

      event.preventDefault();
      if(formdata.password !== formdata.confirmPassword){
          toast.error("password do not match")
          return; 
      }
      setIsLoggedIn(true);
      toast.success("Account Created")
      const accountData ={
          ...formdata
      }

      const finalData = {

        ...accountData,accountType
      }
      console.log("printing account data");
      console.log(finalData);
      navigate("/dashboard");

    }

    

    return(
        <div>
          {/*student-Instructor tab*/}
          <div className ="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max" >
             <button
             className ={`${accountType==="student"?
             "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>setAccountType("student")}>
               student
             </button>
             <button
             className ={`${accountType==="Instructor"?
             "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>setAccountType("Instructor")}>
               Instructor
             </button>
          </div>
             <form
             className ="flex flex-col w-full gap-y-4mt-6" 
             onSubmit={submitHandler} >
             <div className ="flex gap-x-4 mt-[20px]" >
             <label className ="w-full">
             <p className ="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className ="text-pink-200">*</sup></p>
             <input
               required
               type ="text"
               name ="firstName"
               onChange={changeHandler}
               placeholder="Enter first Name"
               value={formdata.firstName}

               className =" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
             />
             </label>
             <label className ="w-full">
             <p className ="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className ="text-pink-200">*</sup></p>
             <input
               required
               type ="text"
               name ="lastName"
               onChange={changeHandler}
               placeholder="Enter first Name"
               value={formdata.lastName}
               className =" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
             />
            </label>
             
             </div>

             <label className ="w-full mt-[20px]">
             <p className ="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Emali Address <sup className ="text-pink-200">*</sup></p>
             <input
               required
               type ="email"
               name ="email"
               onChange={changeHandler}
               placeholder="Enter email address"
               value={formdata.email}
               className =" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
             />
            </label>
            <div className ="flex gap-x-4 mt-[20px]" >
            <label className ="w-full relative">
            <p className ="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className ="text-pink-200">*</sup></p>
            <input
              required
              type ={showPassword?("text"):("password")}
              name ="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formdata.password}
              className =" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
            className ="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) =>!prev)}>
               {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
           </label>
           <label className ="w-full relative">
             <p className ="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup>*</sup></p>
             <input
               required
               type ={showConfirmPassword?("text"):("password")}
               name ="confirmPassword"
               onChange={changeHandler}
               placeholder="Confirm password"
               value={formdata.confirmPassword}
               className =" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
             />
             <span
             className ="absolute right-3 top-[38px] cursor-pointer"
             onClick={() => setShowConfirmPassword((prev) =>!prev)}>
               {showConfirmPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
             
            </label>
            
            </div>
            <button className =" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
              Create Account
            </button>

          </form>
          
        </div>
    
        
      )
}

export default SignupForm;