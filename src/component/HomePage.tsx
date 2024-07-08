import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cardData } from "../constants/Cards";
import "./home.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { GetCurrentUser } from "../redux/user/userSlice";
import { IProductDetails, setCurrentProduct } from "../redux/user/productSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const products = useSelector<RootState, IProductDetails[]>(
    (state) => state.productSlice.products
  );
  console.log(products);

  return (
    <div className="first-section">
      <div>
        <Typography variant="h4" align="left" className="new-release">
          New Releases
        </Typography>
      </div>
      <div className="Home-CardSection-1">
        {products.map((item) => (
          <Card
            className="card-home"
            onClick={() => {
              dispatch(setCurrentProduct(item));
              navigate("/productDetails");
            }}
          >
            <CardMedia
              image={item.imageUrl}
              title="green iguana"
              className="card-img"
              sx={{ width: "100%" }}
            />
            <CardContent className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="brand-name"
              >
                {item.brandName}
                {""} {item.type}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="brand-price"
              >
                {item.price}
              </Typography>
            </CardContent>
            {/* <CardActions>
<Button size="small">Share</Button>
<Button size="small">Learn More</Button>
</CardActions> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
