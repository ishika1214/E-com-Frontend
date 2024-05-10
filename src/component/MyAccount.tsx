import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  Collapse,
  Input,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import shirt from "../assets/shirt.jpeg";
import "./myAccount.css";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

import Address from "./Address";
const MyAccount = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    gap: "15px",
  }));

  const [isOpen, setIsOpen] = useState({
    order: false,
    Wishlist: false,
    cart: false,
    address: false,
  });



  return (
    <div className="My-Account">
      <Stack spacing={1}>
        <Item className="item">
          <div className="item-headers">
            <div
              className="Icon"
              onClick={() => setIsOpen({ ...isOpen, order: !isOpen.order })}
            >
              {!isOpen.order ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
            <Typography className="heading">Your Orders</Typography>
          </div>
          <Collapse in={isOpen.order} timeout="auto" unmountOnExit>
            <div className="collapse">
              <div className="order-item">
                <img src={shirt} alt="" className="order-image" />
                <div className="order-details">
                  <p className="order-brand">Nike</p>
                  <p className="order-type">white Shirt</p>
                  <p className="order-price">$29.9</p>
                </div>
              </div>

              <p className="order-status">Shipped</p>
            </div>
            <div className="collapse">
              <div className="order-item">
                <img src={shirt} alt="" className="order-image" />
                <div className="order-details">
                  <p className="order-brand">Nike</p>
                  <p className="order-type">white Shirt</p>
                  <p className="order-price">$29.9</p>
                </div>
              </div>

              <p className="order-status">Shipped</p>
            </div>
          </Collapse>
        </Item>

        <Item className="item">
          <div className="item-headers">
            <div
              className="Icon"
              onClick={() => setIsOpen({ ...isOpen, cart: !isOpen.cart })}
            >
              {!isOpen.cart ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
            <Typography className="heading">Your Cart</Typography>
          </div>
          <Collapse in={isOpen.cart} timeout="auto" unmountOnExit>
            <Cart />
          </Collapse>
        </Item>
        <Item className="item">
          <div className="item-headers">
            <div
              className="Icon"
              onClick={() =>
                setIsOpen({ ...isOpen, Wishlist: !isOpen.Wishlist })
              }
            >
              {!isOpen.Wishlist ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
            <Typography className="heading">Your Wishlist</Typography>
          </div>
          <Collapse in={isOpen.Wishlist} timeout="auto" unmountOnExit>
            <Wishlist />
          </Collapse>
        </Item>
        <Item className="item">
          <div className="item-headers">
            <div
              className="Icon"
              onClick={() => setIsOpen({ ...isOpen, address: !isOpen.address })}
            >
              {!isOpen.address ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
            <Typography className="heading">Saved Address</Typography>
          </div>
          <Collapse in={isOpen.address} timeout="auto" unmountOnExit>
           
            <Address/>
          </Collapse>
        </Item>
        <Item className="item">
          <div className="item-headers">
            <LogoutIcon />
            <Typography className="heading">LogOut</Typography>
          </div>
        </Item>
      </Stack>
    </div>
  );
};

export default MyAccount;
