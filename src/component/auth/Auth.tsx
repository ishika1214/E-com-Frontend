import React, { useState } from "react";
import "./signIn.css";
import defaultImage from "../../assets/defaultImage.svg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Auth = () => {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <div className="signInContainer">
      <img src={defaultImage} alt="" className="default-Image" />
      {!isSignUp ? (
        <SignIn setSignUp={setSignUp} />
      ) : (
        <SignUp setSignUp={setSignUp} />
      )}
    </div>
  );
};

export default Auth;
