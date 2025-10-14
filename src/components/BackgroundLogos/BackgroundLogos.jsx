import React from "react";
import "./BackgroundLogos.css";

export const BackgroundLogos = () => {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ];

  return (
    <div className="background">
      {logos.map((logo, index) => (
        <img key={index} src={logo} className="logo" />
      ))}
    </div>
  );
};
