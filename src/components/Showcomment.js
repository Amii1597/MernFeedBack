import React, { useState } from "react";
import "./Feedback.css";
import Addputcomment from "./Addputcomment";
import Productadd from "./Productadd";
// import Comments from './Comments';
// import Dropdown from 'react-dropdown'

const Addproduct = () => {
  const options = [
    {
      value: "Upvotes",
      label: "Upvotes",
    },
    { value: "Comments", label: "Comments" },
  ];
  const defaultOption = options[0];
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="Datafillter">
        <div className="apply_fillter">
          <h1 className="fb">Feedback</h1>
          <h3 className="apply">Apply Filter</h3>
        </div>
        <div className="searchbar">
          <h3 className="suggestion">10 Suggestions</h3>
          {/* <h5 className="sortby">Sort By</h5> */}
      
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
          
          <button className="addproduct" onClick={() => setShowModal(true)}>
            + Add Product
          </button>
          {showModal && <Productadd closeModal={closeModal} />}
        </div>
      </div>
      {/* <div className="joblist">
</div> */}
      <div className="data">
        {/* <Filter/> */}
     <Addputcomment/>
      </div>
      {/* <Comments/> */}
    </>
  );
};

export default Addproduct;
