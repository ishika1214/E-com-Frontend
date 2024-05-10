
import axios from "../axios/axios";
import { IsignInData } from "../component/auth/SignIn";
import { ISignupData } from "../component/auth/SignUp";

const postSignIn = async (payload: IsignInData) => {
  try {
    const data = await axios.post("/auth/signIn", payload);
    return data;
  } catch (error: any) {
    //   toast.error(error.response.data.message)
    console.log(error);
  }
};
const postSignUp = async (payload: ISignupData) => {
  try {
    const {data} = await axios.post("/auth/signUp", payload);
    return data;
  } catch (error: any) {
    //   toast.error(error.response.data.message)
    console.log(error);
  }
};
export const authService = {
  postSignIn,
  postSignUp,
};
