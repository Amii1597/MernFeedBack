import React from 'react'
import "./Header.css";
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const handleLogin = ()=>{
    
        navigate("/Login")
   }
    const handleSignup = ()=>{
    
        navigate("/Register")
   }
  return (
<>
<div className="headerF">
            <h1 className="headingF">Feedback</h1>
            <button className="loginF" onClick={handleLogin}>Log in</button>
            <button className="signupF" onClick={handleSignup}>Sign up</button>

          </div>
</>
  )
}

export default Header