import React from "react";

import signupImg from "../assets/signup.png"
import Template from "../components/Template";

const Signup = ({setIsLoggedIn}) =>{

    return(
        <div>

        <Template
        title ="Join the millions of learning to code with stydyNotion for free"
           desc1 = "Build skills for today,tomorrow,and beyond"
           
        desc2 = "Education is future proof your career."
        image ={signupImg}
        formtype ="signup"
        setIsLoggedIn ={setIsLoggedIn}
        />
        
        </div>
    )
}

export default Signup