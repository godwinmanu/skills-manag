import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserMenu from "../../components/UserMenu";
import "./index.scss";
import userPic from "../../assets/img/user.png";

const Navbar = () => {
  const authUser = localStorage.getItem("user");
  const authUserData = authUser ? JSON.parse(authUser) : null;

  return (
    <div className="Navbar">
      <Link to="/" className="brand-logo">
        {/* <img src={logo} alt="" /> */}
        <span>Skill</span>
        <span>manag</span>
      </Link>
      <div className="link-items">
        <Link to="/" className="px-2">
          Accueil{" "}
        </Link>
        <Link to="faq" className="px-2">
          FAQ{" "}
        </Link>
        {authUserData && authUserData.access_token ? (
          <UserMenu userPic={userPic} />
        ) : (
          <div className="auth-buttons">
            <Link to="signup">S'inscrire</Link>
            <Link to="login">Se Connecter</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
