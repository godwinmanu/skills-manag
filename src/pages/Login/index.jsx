import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Presentation from "../../components/Presentation";

const Login = () => {
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
  });

  const logUserIn = async (e) => {
    e.preventDefault();
    try {
      /* const userObject = await postRequest("/login", {
        email : userInfos.email,
        password : userInfos.password
      })
      console.log(userObject)*/
      let userObjectStringify = JSON.stringify({
        access_token :/*  userObject.data.data.access_token */ "$ZD5:8484dzff4weef74044142855",
        username : /* userObject.data.data.user.username */ 'Username',
        x : /* userObject.data.data.user.id */ 1
      })
      localStorage.setItem("user", userObjectStringify)
      window.location.href = "member-space"
    } catch (error) {
      console.log(error);
    }
  };

  const getUserEmail = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const getUserPassword = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  return (
    <div className="Login">
      <Presentation />
      <form onSubmit={logUserIn}>
        <p className="text-center">Connectez-vous en tant que <span>travailleur</span> ou <span>entreprise</span></p>
        
        <input
          type="text"
          placeholder="Adresse Email"
          onChange={getUserEmail}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={getUserPassword}
        />
        <button type="submit">Se Connecter</button>
        <Link to="/forgot-password" className="text-center text-sm font-bold">
          Mot de passe oublié ?
        </Link>
      </form>
    </div>
  );
};

export default Login;
