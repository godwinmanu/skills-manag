import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

// import logo from "../../static/img/logo.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logo mb-5">
        <span>Skill</span>
        <span>manag</span>
      </div>
      <div className="separator"></div>
      <div className="social-media">
        <a href="https://www.facebook.com">
          {" "}
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com">
          {" "}
          <FiInstagram />{" "}
        </a>
        <a href="https://linkedin.com">
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a href="https://twitter.com">
          {" "}
          <FaTwitterSquare />{" "}
        </a>
      </div>
      <div className="policy-copyrights my-3">
        {" "}
        &copy; 2022 GIT5-RII. Tous droits réservés.{" "}
      </div>
    </div>
  );
};

export default Footer;
