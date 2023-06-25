
import React, { useState } from 'react'
import "./Feedback.css";
import Productaddc from './Productaddc';
import RegisterC from './RegisterC'

const LoginRegisterC = () => {
    
   
      const [showModal,setShowModal]=useState(false);
      const closeModal=()=>setShowModal(false);
      return (
      <>
        <div className="Datafillter">
    <div className="apply_fillter">
      <h1 className="fb">Feedback</h1>
      <h3 className="apply">Apply Filter</h3>
    </div>
    <div className="searchbar">
    <h3 className='suggestion'>10 Suggestions</h3>
    {/* <h5 className='sortby'>Sort By</h5> */}
    <ul>
              <li>
                <a className="sortby ">Sort By v</a>
             
              <li>
                <ul className="dropdown">
                  <li>
                    <a href="">Upvotes</a>
                  </li>
                  <li>
                    <a href="">Comments</a>
                  </li>
                  
                </ul>
                </li></li>
            </ul>
      <button className="addproduct" onClick={()=>setShowModal(true)}>+ Add Product</button>
      {showModal && <RegisterC closeModal={closeModal}/>}
    
    </div>
    </div>
    {/* <div className="joblist">
    </div> */}
    <div className="data">
      {/* <Filter/> */}
<Productaddc/>
    </div>
      </>
      )
    }
  

export default LoginRegisterC