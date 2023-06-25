
import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";
const RegisterC = ({closeModal}) => {
  

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  //   const navigate = useNavigate()
  //   const handleLogin = ()=>{
  //       navigate("/Login")
  //  }
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Successfull Registration");
      navigate('/Productadd')
    }
  };
  const handleloginC=()=>{
    navigate('/LoginC')
  }
  return (
    <>
   <form method='POST'>
   <div className='modal-wrapper' onClick={closeModal}></div>
    <div className='modal-container'>
  
  
     <div className="product_left">
  <b>Signup to continue</b><br/><br/>
  <input
                type="text"
                placeholder="Name"
                name="name"
        
                value={user.name}
                onChange={handleInputs}
              />
           
              <input
                type="text"
                placeholder="Email"
                name="email"
       
                value={user.email}
                onChange={handleInputs}
              />
         
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                      value={user.mobile}
                onChange={handleInputs}
              />
           
              <input
                type="password"
                placeholder="Password"
                name="password"
        
                value={user.password}
                onChange={handleInputs}
              />
            <br />
  {/* <input type="text" placeholder='Name'/>
  <input type="text" placeholder='Email' />
  <input type="text"  placeholder='Mobile'/>
  <input type="password" placeholder='Password'/><br/> */}
  <span className="span1">Don't have an account ?</span> <span className="span2" onClick={handleloginC}><u>Sign Up</u></span><br/>
  <button className='product_add' onClick={PostData}>Signup</button>
     </div>
     <div className="product_right">
  <b className='productadd_feedback
  '>Feedback</b>
  <h3 className='productadd_heading'>Add your product and rate other items.......</h3>
     </div>
      {/* <button className="model-btn" onClick={closeModal}>Close</button> */}
    </div>
   </form>
    </>
  )
}

export default RegisterC