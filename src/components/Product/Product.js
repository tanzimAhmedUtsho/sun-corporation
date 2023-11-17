import React from "react";
import "./Product.css";

const Product = (props) => {
  const { title, image, category, price, rating } = props.product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-title">{title}</p>

        <p>Category: {category}</p>
        <p>
          <small>Price: $ {price} </small>
        </p>
        <p>
          <small>Rating: {rating.rate}</small>
        </p>
      </div>
      <button className="btn-cart">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
