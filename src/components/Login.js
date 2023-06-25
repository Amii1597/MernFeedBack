import React, { useState } from "react";
import './Login.css';

import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const loginUser = async(e)=>{
  e.preventDefault();
  const res = await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  const data = res.json();
  if(res.status === 400 || !data){
    window.alert("Invalid Credentials");
  }else{
    window.alert("Login Successfull")
    navigate("/Loggedinin")
  }
}
const handleSign=()=>{
  navigate('/Register')
}
  return (
    <>
     <form method="POST">
     <div className="login_container">
          <div className="login_box"> <h1 className='heading'>Feedback</h1>
           <h3 className='subheading'>Add your products and give us your valuable feedback</h3>
             <div className="login_box2">
            <input type="text" placeholder="Email" className="login_email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <br /><br/>
            <input type="text" placeholder="Password" className="login_password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
         <br/>
          
          <button className="login_btn" onClick={loginUser}>Sign in</button>
          <br />
   
        <span className="span1">Don't have an account ?</span> <span className="span2" onClick={handleSign}><u>Sign Up</u></span>
        </div>
        </div>
      </div>
     </form>
    </>
  );
};

export default Login;
