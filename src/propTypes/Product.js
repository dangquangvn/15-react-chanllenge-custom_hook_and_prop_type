import React from "react";
import PropTypes from "prop-types";
import DefaultImage from "../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <img src={image.url} alt="" srcset="" />
      {name}
      {price}
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

Product.defaultProps = {
  image: DefaultImage,
  name: "default Name",
  price: 5.99
};

export default Product;
