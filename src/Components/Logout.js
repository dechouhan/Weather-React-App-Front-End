import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetLoginUser } from "../Redux/Actions/usersAction";
import { resetCityAction, resetCordinatesAction } from "../Redux/Actions/weatherAction";

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetLoginUser());
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("city");
    dispatch(resetCordinatesAction())
    dispatch(resetCityAction())
    alert("You are SuccessFully LogOut");
    history.push("/login");
  }, [dispatch, history]);
 
  
  return <div></div>;
}
