import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWindowResize = () => setScreenWidth(window.innerWidth);
  const breakpoint = 969;

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>{screenWidth >= breakpoint ? <Navigation /> : <MobileNavigation />}</>
  );
};

export default Navbar;
