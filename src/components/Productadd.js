import React, { useEffect, useState } from "react";
import "./Productadd.css";
import { useNavigate } from "react-router-dom";
const Productadd = ({ closeModal }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  const [addUser, setAddUser] = useState({
    companyname: "",
    category: "",
    logoURL: "",
    link: "",
    description: "",
   //  upvotes:""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setAddUser({ ...addUser, [name]: value });
  };

  const dataAdd = async (e) => {
    e.preventDefault();
    const { companyname, category, logoURL, link, description } = addUser;
    const res = await fetch("/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyname,
        category,
        logoURL,
        link,
        description,
      //   upvotes,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("All the details Fill");
      console.log("All the details fill");
    } else {
      window.alert("Added Successfully");
      console.log("Successfully Added");
      navigate('/Loggedinin')
    }
  };
  return (
    <>
      <form method="POST">
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <div className="product_left">
            <b>Add your product</b>
            <br />
            <br />

            <input
              type="text"
              placeholder="Name of the company"
              name="companyname"
              onChange={handleInputs}
              value={addUser.companyname}
            />
            <input
              type="text"
              placeholder="Category"
              name="category"
              onChange={handleInputs}
              value={addUser.category}
            />
            <input
              type="text"
              placeholder="Add logo url"
              name="logoURL"
              onChange={handleInputs}
              value={addUser.logoURL}
            />
            <input
              type="text"
              placeholder="Link of product"
              name="link"
              onChange={handleInputs}
              value={addUser.link}
            />
            <input
              type="text"
              placeholder="Add description"
              name="description"
              onChange={handleInputs}
              value={addUser.description}
            />
            <br />
            <button className="product_add" onClick={dataAdd}>
              +Add
            </button>
          </div>
          <div className="product_right">
            <b
              className="productadd_feedback
"
            >
              Feedback
            </b>
            <h3 className="productadd_heading">
              Add your product and rate other items.......
            </h3>
          </div>
          {/* <button className="model-btn" onClick={closeModal}>Close</button> */}
        </div>
      </form>
    </>
  );
};

export default Productadd;
