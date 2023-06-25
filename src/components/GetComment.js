import React,{useEffect,useState} from "react";
import axios from "axios";
import './Product.css'
const GetComment = () => {
  const [comment, setComment] = useState([]);
  const filterItem = (categItem) => {
    const upadeatedItems = comment.filter((curlelm) => {
      return curlelm.content === categItem;
    });
    setComment(upadeatedItems);
  };
  useEffect(() => {
    axios
      .get("/add")

      .then((res) => {
        setComment(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="getcomment_container">
        {comment
        .map((elm) => {
          const { content } = elm;
          return (
            <>
              <div className="product_imgname"></div>
              <div className="product details">
                {/* <p className="product_description">
                  {comment.length >= 100
                    ? `${comment.slice(0, 100)}...`
                    : comment}
                </p> */}
                <h6 className="comment_get"> {content}</h6>
            
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default GetComment;
