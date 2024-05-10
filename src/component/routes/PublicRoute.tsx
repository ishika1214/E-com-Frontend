import React, { useEffect } from "react";
import SignIn from "../auth/SignIn";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      navigate("/");
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default PublicRoute;
