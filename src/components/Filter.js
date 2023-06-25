
// import "./Feedback.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const Filter = () => {
//     const [products, setProducts] = useState([]);
//     const filterItem=(categItem)=>{
//       const upadeatedItems = products.filter((curlelm)=>{
//         return curlelm.category === categItem
//       })
//       setProducts(upadeatedItems)
//     }
//     useEffect(() => {
//       axios
//         .get("/addproduct")
  
//         .then((res) => {
//           setProducts(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, []);
//   return (
//   <>

//     <div className="filter_contianer">
 
//  {products.map((product , index) => (
//    <div className="product_card" key={index}>

//      <div >
      
//   {/* <h6 >{product.category}</h6> */}
//        <button onClick={()=> filterItem('Technicale')}>Technicale</button>
//        <button>It</button>
//      </div>
//    </div>
//  ))}
// </div>
  
//   </>
//   )
// }

// export default Filter
// import React, { useEffect, useState } from "react";
// import "./Product.css";
// import axios from "axios";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const filterItem=(categItem)=>{
//     const upadeatedItems = products.filter((curlelm)=>{
//       return 
//       curlelm.category === categItem
//     })
//     setProducts(upadeatedItems)
//   }
//   useEffect(() => {
//     axios
//       .get("/addproduct")

//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <>
//     <div className="products_cotianer">
 
//       {products.map((product , index) => (
//         <div className="product_card" key={index}>
//       <div className="product_imgname">
//       <img src={product.logoURL} alt="product" className="product_img" />
//           <h1 className="product_companyname">{product.companyname}</h1>
//       </div>
//           <div className="product details">
//             <p className="product_description">
//               {product.description.length >= 100
//                 ? `${product.description.slice(0, 100)}...`
//                 : product.description}
//             </p>
//        <h6 className="product_category">{product.category}</h6>
//             {/* <p>
//               {[...new Array(Math.ceil(product.rating.rate))].map((e, i) => (
//                 <span key={i}>⭐</span>
//               ))}
//               ({product.rating.count})
//             </p> */}
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="filter_contianer">
//     <button onClick={()=> filterItem('Technicale')}>Technicale</button><br/>
//     <button onClick={()=> filterItem('It')}>It</button>
//     <button onClick={()=> setProducts(products)}>All</button>
    
//     </div>
//   </>
//   );
// };

// export default Product;
import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
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
 
      {products.map((product , index) => (
        <div className="product_card" key={index}>
      <div className="product_imgname">
      <img src={product.logoURL} alt="product" className="product_img" />
          <h1 className="product_companyname">{product.companyname}</h1>
      </div>
          <div className="product details">
            <p className="product_description">
              {product.description.length >= 100
                ? `${product.description.slice(0, 100)}...`
                : product.description}
            </p>
       <h6 className="product_category">{product.category}</h6>
            {/* <p>
              {[...new Array(Math.ceil(product.rating.rate))].map((e, i) => (
                <span key={i}>⭐</span>
              ))}
              ({product.rating.count})
            </p> */}
          </div>
        </div>
      ))}
    </div>
    <div className="filter_contianer">
    <button onClick={()=> filterItem('Technicale')}>Technicale</button><br/>
    <button onClick={()=> filterItem('It')}>It</button>
    <button onClick={()=> setProducts(products)}>All</button>
    
    </div>
  </>
  );
};

export default Product;
