import React, { useState, useEffect, useContext } from "react";
import GradientColors from "./GradiantColors";
import InfologoLinks from "./InfoLogoLinks";
import "../Styles/gradient.css";
import { ThemeFunction } from "../App";

const InfoLogo = () => {
  const colors = GradientColors;
  const iconImg = InfologoLinks;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[currentIndex];

  const containerStyle = {
    background: `linear-gradient(180deg, ${currentColor.grad2} 0%, ${currentColor.grad1} 100%)`,
  };

  const { theme } = useContext(ThemeFunction);

  return (
    <>
      <div className="info-logo_left">
        <ul className="ul-icon">
          {iconImg.map((icons, key) => (
            <a href={icons.link} key={key}>
              <li key={key}>
                {theme === "dark" ? (
                  <img
                    className="info-logo_icons"
                    src={icons.img}
                    alt={icons.img}
                  />
                ) : (
                  <img src={icons.img2} className="info-logo_icons" />
                )}
              </li>
            </a>
          ))}
          <span
            className="info-line_left info-line"
            style={containerStyle}
          ></span>
        </ul>
      </div>
      <div className="info-logo_right">
        <div className="info-logo_right_flex">
          <a href="mailto:ibiwoyeroland.com">
            <p>ibiwoyeroland@gmail.com</p>
          </a>
          <span
            className="info-line_right info-line"
            style={containerStyle}
          ></span>
        </div>
      </div>
    </>
  );
};

export default InfoLogo;
