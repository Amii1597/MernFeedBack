import React from 'react'
import "./Logout.css";
import avatar from "../assets/avatar.png"
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate()
  // useEffect(()=>{
  //   fetch('/logout',{
  //     method:"GET",
  //     headers:{
  //       Accept:"application/json",
  //       "Content-Type": "application/json"
  //     },
  //     credentials:"include"
  //   }).then((res)=>{
  //     navigate("/Login")
  //   }).catch((err)=>{
  //     console.log(err);
  //   });
  //   });
    const handleLogout = async(e)=>{
      e.preventDefault();
      const res = await fetch('/logout',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
          
        },
        credentials:"include"
      })
      const data = res.json();
      if(res.status === 400 || !data){
        window.alert("Invalid Credentials");
      }else{
      
        navigate("/")
      }
    }
  return (
<>
<div className="headerF">
            <h1 className="headingF">Feedback</h1>
<button className="logoutF" onClick={handleLogout}>Logout</button>
<h1 className='Hello'>Hello!</h1>
<img src={ avatar} alt="" className="avatar" />
</div>
</>
  )
}

export default Logout