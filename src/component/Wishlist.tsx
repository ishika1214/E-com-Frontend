import Stack from "@mui/material/Stack";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { cardData } from "../constants/Cards";
import { Button } from "@mui/material";
import "./wishlist.css";
const Wishlist = () => {
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
    <div className="wishlist-container">
      <Stack spacing={4}>
        {cardData.map((item: any, index: number) => (
          <Item className="wishlist-item">
            <div className="wishlist-row2">
              <div className="wishlist-img">
                <img src={item.imageUrl} alt="" />
              </div>

              <div className="wishlist-type">
                <p>
                  {item.brandName}
                  {""} {item.type}{" "}
                </p>

                <p style={{ color: "#1976d2" }}>Price : {item.price}</p>
              </div>
            </div>
            <div className="wishlist-actions">
              <Button variant="contained" className="button1">
                + Cart
              </Button>
              <Button variant="contained" className="button1">
                Remove
              </Button>
            </div>
          </Item>
        ))}
      </Stack>
    </div>
  );
};

export default Wishlist;
