import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import InputOrnament from "../../components/InputOrnament";
import { MdVpnKey } from "react-icons/md";
// import { postRequest } from "../../services/api";

const ResetPassword = () => {
  const [token, setToken] = useState();
  const [isReseted, setIsReseted] = useState(false);

  const [userInfos, setUserInfos] = useState({
    email: "",
    password1: "",
    password2: "",
  });

  const getPassword1 = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      password1: e.target.value,
    }));
  };

  const getPassword2 = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      password2: e.target.value,
    }));
  };

  const getEmail = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const resetUserPassword = async (e) => {
    e.preventDefault();
    try {
      /* const userObject = await postRequest("/password/reset", {
        token: token,
        email: userInfos.email,
        password: userInfos.password1,
        password_confirmation: userInfos.password2,
      });
      console.log(userObject);
      setIsReseted(true); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParams = window.location.search;
    const tokenValue = new URLSearchParams(urlParams).get("token");
    setToken(tokenValue);
  }, []);

  return (
    <div className="ResetPassword">
      {isReseted ? (
        <div className="reseting-done-message">
          <p>Mot de passe réinitialisé avec succès !</p>
          <p className="mb-3">
            Vous pouvez à présent vous{" "}
            <Link
              reloadDocument
              to="/login"
              className="text-orange-600 border-b border-orange-600"
            >
              connecter
            </Link>
          </p>
        </div>
      ) : (
        <form onSubmit={resetUserPassword}>
          <p>Réinitialisation du mot de passe.</p>
          <p className="mb-3">
            Créez un nouveau mot de passe pour accéder à votre compte.
          </p>

          {/* <InputOrnament
            type="text"
            placeholder="Saisissez votre adresse email"
            startOrnament={FaRegUser}
            getData={getEmail}
          />

          <InputOrnament
            type="password"
            placeholder="Créer un nouveau mot de passe"
            startOrnament={MdVpnKey}
            endOrnament="passwordEye"
            getData={getPassword1}
          />

          <InputOrnament
            type="password"
            placeholder="Confirmer le nouveau mot de passe"
            startOrnament={MdVpnKey}
            endOrnament="passwordEye"
            getData={getPassword2}
          /> */}
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
