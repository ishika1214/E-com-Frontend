import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../../constants/Cards";
import { Shirts } from "../../constants/shirts";

export interface IProductDetails {
  id: number | null;
  brandName: string;
  type: string;
  imageUrl: string;
  price: string;
  gender?: string;
}
export interface IProduct {
  products: IProductDetails[];
  currentProduct: IProductDetails;
}
const initialState: IProduct = {
  products: cardData,
  currentProduct: {
    id: null,
    brandName: "",
    type: "",
    imageUrl: "",
    price: "",
  },
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        let data;
        if (action.payload === "shirt") {
          data = Shirts;
        } else if (
          action.payload.includes("Womens") &&
          action.payload.includes("Womens")
        ) {
          data = Shirts.filter(
            (item) => item.gender === "women" && item.type === "Shirt"
          );
        } else if (
          action.payload.includes("Mens") &&
          action.payload.includes("Mens")
        ) {
          data = Shirts.filter(
            (item) => item.gender === "men" && item.type === "Shirt"
          );
        }
        if (data)
          return {
            ...state,
            products: data,
          };
      } else {
        return {
          ...state,
        };
      }
    },
    setCurrentProduct: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          currentProduct: action.payload,
        };
      }
    },
  },
});

export const { setProducts, setCurrentProduct } = productSlice.actions;
export default productSlice;
