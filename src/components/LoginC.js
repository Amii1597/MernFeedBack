import React from 'react'
import  { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './LgoinC.css'
const LoginC = ({closeModal}) => {
  const navigate= useNavigate()
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
    navigate("/Productadd")
  }
}

  return (
   <>
   <form method='POST'>

    <div className='modal-wrapper' onClick={closeModal}></div>
    <div className='modal-container'>
     <div className="loginC_left">
  <b>Login to continue</b><br/><br/>
  
  <input type="text" placeholder='Name' className="loginC_email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
  <input type="text" placeholder='Email' name="password" className="loginC_password" value={password} onChange={(e)=> setPassword(e.target.value)} />
  <button className='loginC_add' onClick={loginUser}>Login</button>
     </div>
     <div className="loginC_right">
  <b className='loginC_feedback
  '>Feedback</b>
  <h3 className='loginC_heading'>Add your product and rate other items.......</h3>
     </div>
      {/* <button className="model-btn" onClick={closeModal}>Close</button> */}
    </div>
   </form>
    </>
  )
}

export default LoginC