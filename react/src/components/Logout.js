import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("logout in");

    localStorage.removeItem("cont");
    navigate("/");
  });

  return <div> LOUGOUT</div>;
}
export default Logout;
