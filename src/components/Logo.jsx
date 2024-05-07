import React from "react";

function Logo({ height = "8" }) {
  return (
    <img
      src="/images/Zomato-Logo.png"
      alt="Zomato Logo"
      className={`h-${height} w-auto`}
    />
  );
}

export default Logo;
