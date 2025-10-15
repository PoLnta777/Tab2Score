import React from "react";
import "./BackgroundLogos.css";

export const BackgroundLogos = () => {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo1.png",
    "/logos/logo1.png",
    "/logos/logo1.png",
    "/logos/logo1.png",
    "/logos/logo1.png",
  ];

  return (
    <div className="background">
      {logos.map((logo, index) => (
        <img key={index} src={logo} className="logo" />
      ))}
    </div>
  );
};
