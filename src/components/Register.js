import React, { useState } from "react";
import "./Register.css";

// import registerimage from "../assets/loginimage.png";
import { useNavigate } from "react-router-dom";
const Register = () => {
  // const history = useHistory();
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
      navigate("/Loggedinin");
    }
  };
  return (
    <>
      <form method="POST">
        <div className="signup_container">
          <div className="signup_box">
            <h1 className="headingS">Feedback</h1>
              <h3 className="subheadingS">
                Add your products and give us your valuable feedback
              </h3>
     
            <div className="singup_box2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="name"
                value={user.name}
                onChange={handleInputs}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="email"
                value={user.email}
                onChange={handleInputs}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                className="mobile"
                value={user.mobile}
                onChange={handleInputs}
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="password"
                value={user.password}
                onChange={handleInputs}
              />
            <br />
            <button className="signup" onClick={PostData}>
            Signup
            </button>
            </div>

            <br />
          </div>
        </div>
        
      </form>
    </>
  );
};

export default Register;
