import React, { useEffect, useState } from "react";
import Header from "./Sections/Header/Header";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, [location.pathname]);
  return (
    <div className="App">
      {status ? <Header /> : <></>}
      <Outlet />
    </div>
  );
};

export default Root;
