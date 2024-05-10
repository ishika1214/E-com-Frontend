import axios from "../axios/axios";

const getCurrentUser = async () => {
  try {
    const { data } = await axios.get("/users/me");
    return data;
  } catch (error: any) {
    //   toast.error(error.response.data.message)
    console.log(error);
  }
};

const uploadUserProfilePic = async (files: any) => {
  try {
    const { data } = await axios.patch("/users/uploadProfile", files);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async ( payload: any) => {
  try {
    const { data } = await axios.put(`/users`, payload);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const userService = {
  getCurrentUser,
  uploadUserProfilePic,
  updateUser
};
