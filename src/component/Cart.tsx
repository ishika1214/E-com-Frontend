import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { cardData } from "../constants/Cards";
import { Button, Stack } from "@mui/material";
import "./cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const Cart = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
  }));
  return (
    <div className="cart-container">
      <Stack spacing={4}>
        {cardData.map((item: any, index: number) => (
          <Item className="cart-item">
            <div className="cart-row2">
              <div className="cart-img">
                <img src={item.imageUrl} alt="" />
                <div className="item-Quantity">
                  <AddIcon className="quantity-icon" />
                  {/* <div className="quantity-no"></div> */}
                  <RemoveIcon className="quantity-icon" />
                </div>
              </div>

              <div className="cart-type">
                <p>
                  {item.brandName}
                  {""} {item.type}{" "}
                </p>

                <p style={{ color: "#1976d2" }}>Price : {item.price}</p>
              </div>
            </div>
            <div className="cart-actions">
              <Button variant="contained" className="button">
                + Cart
              </Button>
              <Button variant="contained" className="button">
                Remove
              </Button>
            </div>
          </Item>
        ))}
      </Stack>
    </div>
  );
};

export default Cart;
