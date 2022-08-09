import React, { useState } from "react";

const Card = (props) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreDescription = () => {
    setReadMore((prev) => !prev);
  };
  return (
    <div className="container">
      <div>
        <div className="title">{props.data.title}</div>
        <div className="second-container">
          <img src={props.data.image} alt="" />
          <div className="price">{props.data.price} Euro </div>
        </div>
        <div className="description">
          {props.data.description.substring(0, 50)}
          {!readMore && <span onClick={readMoreDescription}>...More</span>}
          {readMore && <span>{props.data.description.substring(100)}</span>}
          {readMore && <span onClick={readMoreDescription}>...Less</span>}
        </div>
      </div>
      <div>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
