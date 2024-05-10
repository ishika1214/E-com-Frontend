import { Box, Button } from "@mui/material";
import React from "react";
import "./productDetails.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import detail from "../assets/shirt.jpeg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductDetails = () => {
  return (
    <div className="Product-Details">
      <div className="back-button">
        <KeyboardBackspaceIcon />
      </div>
      <div className="detail-con">
        <div className="img-container">
          <img src={detail} alt="" className="product-img" />
        </div>

        <div className="product-price"> Price : $ 255 </div>
        <div className="product-desc">
          <p> Nike </p>
          <p> Shoes </p>
        </div>

        <div className="product-actions">
          <Button variant="contained" className="button-actions">
            <ShoppingCartOutlinedIcon /> Add to Cart
          </Button>
          <Button variant="contained" className="button-actions">
            <FavoriteBorderOutlinedIcon /> Move to Wishlist
          </Button>
        </div>

        <div className="size-chart">
          <div className="dot">XS</div>
          <div className="dot">S</div>
          <div className="dot">M</div>
          <div className="dot">L</div>
          <div className="dot">XL</div>
          <div className="dot">XXL</div>
        </div>
        <div style={{ textAlign: "left", padding: "15px 0px" }}>
          <p style={{fontWeight:"bold"}}>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            repellendus delectus quam officia facilis praesentium rerum deleniti
            iste necessitatibus nisi alias totam fugit, illum, fugiat maxime!
            Omnis eligendi quos adipisci facere? Libero autem laboriosam,
            voluptatem incidunt sapiente eum recusandae alias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
