/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeSideLines from "./HomeSideLines";
import HomeNameSvg from "./HomeNameSvg";
import "../../Styles/gradient.css";
import HomeLinesGrad from "./HomeLinesGrad";
import HomeLogo from "./HomeLogo";
import GradientColors from "../GradiantColors";
import { NavLink } from "react-router-dom";

const Home = () => {
  const colors = GradientColors;

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

  const lineStyle = {
    background: `linear-gradient(90deg, ${currentColor.grad2} 0%, ${currentColor.grad1} 100%)`,
  };

  return (
    <motion.main
      className="Home-container"
      key={"animatekey"}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4, y: 0, ease: "easeIn" }}
      style={{ width: "99.23%" }}
    >
      <section className="home">
        <HomeSideLines currentColor={currentColor} />
        <section className="inner-container">
          <div className="inner-container-text">
            {/* <HomeNameSvg /> */}
            <div style={{
              fontSize:"3rem",
              fontWeight:600,
            }}>I am Roland Ibiwoye</div>
            <div className="inner-container-pgraph">
              <div className="test2">
                <HomeLinesGrad containerStyle={containerStyle} />
                <div className="display-text">
                  <span className="inner-text text-width">
                    A front-end engineer who is enthusiastic about developing
                    aesthetically pleasing web interfaces, web applications, and
                    user experiences
                  </span>
                  <span className="inner-text-2 text-width">
                    You can also see my work on the following pages:
                    <NavLink to="Projects">
                      <button className="bn5">Projects</button>,
                    </NavLink>
                    <NavLink to="About">
                      <button className="bn5">About</button>,
                    </NavLink>
                    <br />
                    <NavLink to="Contacts">
                      <button className="bn5">Contact me</button>
                    </NavLink>
                    <span>, or send me an email or message to</span>
                    <a href="mailto:ibiwoyeroland@gmail.com">
                      <button className="bn5">ibiwoyeroland@gmail.com</button>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <HomeLogo lineStyle={lineStyle} />
          <p className="credit-portfolio-link">ibiwoyeroland@gmail.com</p>
        </section>
      </section>
    </motion.main>
  );
};
export default Home;
