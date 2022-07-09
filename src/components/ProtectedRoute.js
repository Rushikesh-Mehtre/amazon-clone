import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";

const ProtectedRoute = (props) => {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin", { replace: true });
    }
  }, [navigate, isLoggedIn]);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
