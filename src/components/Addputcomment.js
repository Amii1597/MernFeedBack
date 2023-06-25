import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";

import Comments from './Comments';
// import GetComment from "./GetComment";
const Product = () => {

  const [products, setProducts] = useState([]);
  const Refreshpage=()=>{
window.location.reload(false);
  }
  const filterItem=(categItem)=>{
    const upadeatedItems = products.filter((curlelm)=>{
      return curlelm.category === categItem
    })
    setProducts(upadeatedItems)
  }
  useEffect(() => {
    axios
      .get("/addproduct")

      .then((res) => {
        setProducts(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <>
    <div className="products_cotianer">
      {
        products.map((elm)=>{
          const { companyname,category,logoURL,description,content}=elm;
          return(
            <>

           <div className="backset">

      <div className="product_imgname">
      <img src={logoURL} alt="product" className="product_img" />
          <h1 className="product_companyname">{companyname}</h1>
          </div>
          <div className="product_details">
          <div className="descomm">

            <p className="product_description">
              {description.length >= 100
                ? `${description.slice(0, 100)}...`
                : description}
            </p>
            
      
          </div>
          
       
      </div>
           </div>
           <Comments/>
       <h6 className="product_category">{category}</h6>
   
 
     
            </>
          )
        })
      }
    </div>
    
    <div className="filter_contianer">

    <button onClick={Refreshpage}>All</button>
    <button onClick={()=> filterItem('Fintech')}>Fintech</button>
    <button onClick={()=> filterItem('Edtech')}>Edtech</button>
    <button onClick={()=> filterItem('B2B')}>B2B</button><br/>
    <button onClick={()=> filterItem('Saas')}>Saas</button><br/>
    <button onClick={()=> filterItem('Agritech')}>Agritech</button>
    <button onClick={()=> filterItem('Medtech')}>Medtech</button><br/>
   
    </div>
  </>
  );
};

export default Product;
