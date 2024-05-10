import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../service/user.service";

export interface Iuser {
  id: number | null;
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  profilePic: string;
}
export interface IuserSlice {
  user: Iuser;
}
const initialState: IuserSlice = {
  user: {
    id: null,
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    profilePic: "",
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCurrentUser.fulfilled, (state, action) => {
      return {
        user: action.payload,
      };
    });
    builder.addCase(UploadUserProfilePic.fulfilled, (state, action) => {
      console.log(action.payload, "action.payload");
      return {
        ...state,
        user: {
          ...state.user,
          profilePic: action.payload.profilePicUrl,
        },
      };
    });
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      console.log(action.payload)
      if (action.payload !== undefined) {
        return {
          ...state,
          user: {
            ...state.user,
            contact: action.payload.contact,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
          },
        };
      }
    });
  },
});

export const GetCurrentUser = createAsyncThunk(
  "/getUser",
  async (_, { dispatch }) => {
    try {
      const data = await userService.getCurrentUser();
      console.log(data);
      return data;
    } catch (e: any) {}
  }
);

export const UploadUserProfilePic = createAsyncThunk(
  "/upload/profile/pic",
  async ({ files }: { files: any }, { dispatch }) => {
    try {
      const data = await userService.uploadUserProfilePic(files);

      return data;
    } catch (e: any) {}
  }
);

export const UpdateUser = createAsyncThunk(
  "/update/user",
  async (
    {
      firstName,
      lastName,
      contact,
    }: {firstName: string; lastName: string; contact: string },
    { dispatch }
  ) => {
    const payloadData = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
    };
    try {
      const data = await userService.updateUser(payloadData);

      return data;
    } catch (e: any) {}
  }
);

export default userSlice;
