import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (!data) {
      navigate("/auth");
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default PrivateRoute;
