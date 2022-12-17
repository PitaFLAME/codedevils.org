import React, { useState, useEffect } from "react";

// navbars
import DesktopNavbar from "./desktop";
import MoblieNavbar from "./moblie";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // Call the function once to set the initial value of isMobile
    checkIfMobile();
    // Add an event listener to update isMobile whenever the window is resized
    window.addEventListener("resize", checkIfMobile);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return <>{isMobile ? <MoblieNavbar /> : <DesktopNavbar />}</>;
};

export default Navbar;
