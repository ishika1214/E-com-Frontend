import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import productSlice from "./user/productSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    userSlice: userSlice.reducer,
    productSlice: productSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
