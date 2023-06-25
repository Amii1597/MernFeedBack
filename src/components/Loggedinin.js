import React from 'react'
import "./Feedback.css";
import home1 from "../assets/home1.png";

import Addproduct from "./Addproduct";
import Logout from "./Logout";
const Loggedinin = () => {
  return (
<>
<div className="feedback_container">
    
    <Logout/>
        {/* Center Part */}
        <div className="centerF">
          <img src={home1} alt="" className="home1" />
          <h1 className="headingFF">Add your products and give
your valuable feedback</h1>
<h4 className="subheadingFF">Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</h4>
        </div>
<Addproduct/>
      </div>
</>
  )
}

export default Loggedinin