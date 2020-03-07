import React, { useState, useEffect } from "react";
import logo from "../assets/wired-logo.png";
import Router from "next/router";
import "../styles/navbar.scss";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleRouteChange = url => {
      setActive(false);
    };

    Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const sidebarClass = isActive ? "navbar--sidebar-active" : "";

  return (
    <header className={`navbar ${sidebarClass}`}>
      <div className="navbar__title">
        <div className="navbar__button" onClick={() => setActive(!isActive)}>
          <svg
            version="1.1"
            viewBox="0 0 26 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g></g>
            <path d="M24.25,12.25H1.75C1.3359375,12.25,1,12.5859375,1,13s0.3359375,0.75,0.75,0.75h22.5   c0.4140625,0,0.75-0.3359375,0.75-0.75S24.6640625,12.25,24.25,12.25z" />
            <path d="M1.75,7.75h22.5C24.6640625,7.75,25,7.4140625,25,7s-0.3359375-0.75-0.75-0.75H1.75   C1.3359375,6.25,1,6.5859375,1,7S1.3359375,7.75,1.75,7.75z" />
            <path d="M24.25,18.25H1.75C1.3359375,18.25,1,18.5859375,1,19s0.3359375,0.75,0.75,0.75h22.5   c0.4140625,0,0.75-0.3359375,0.75-0.75S24.6640625,18.25,24.25,18.25z" />
          </svg>
        </div>
        <img src={logo} alt="logo" />
        <h4>React Azure Maps</h4>
      </div>
      <a
        className="github-link"
        href="https://github.com/WiredSolutions/react-azure-maps"
        target="_blank"
      >
        <svg
          focusable="false"
          viewBox="0 0 51.8 50.4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3C51.5,11.7,40.1,0.2,25.9,0.2z"></path>
        </svg>
      </a>
    </header>
  );
};

export default Navbar;
