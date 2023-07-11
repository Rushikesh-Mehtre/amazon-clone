import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/signin", { replace: true });
    }
  }, [navigate, isUserLoggedIn]);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
