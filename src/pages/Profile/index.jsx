import { useEffect, useState } from "react";
import "./index.scss";
import userPic from "../../assets/img/user.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Api } from "@mui/icons-material";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const skills_tab = [
  { title: "JavaScript" },
  { title: "Laravel" },
  { title: "Python" },
  { title: "Django" },
  { title: "ReactJS" },
  { title: "Stratégie B2B" },
  { title: "Tunel de vente" },
];
const Profile = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [userInfos, setUserInfos] = useState({
    lastname: "",
    firstname: "",
    email: "",
    telephone: "",
    password1: "",
    password2: "",
    userPresentation: "",
  });

  const getLastname = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      lastname: e.target.value,
    }));
  };

  const getFirstname = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      firstname: e.target.value,
    }));
  };

  const getEmail = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const getTelephone = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      telephone: e.target.value,
    }));
  };

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

  return (
    <div className="Profile">
      <div className="user-pic">
        <img src={userPic} alt="User Profile Picture" />
      </div>
      <div className="infos-container">
          {/* <p>Informations personnelles</p> */}
          <div className="section grid gap-5">
            <div className="flex gap-5">
              <div className="input-group w-full">
                <label htmlFor="firstname">Prénoms</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Prénoms"
                  onChange={getFirstname}
                />
              </div>
              <div className="input-group w-full">
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Nom"
                  onChange={getLastname}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="input-group w-full">
                <label htmlFor="lastname">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Adresse Email"
                  onChange={getEmail}
                />
              </div>
              <div className="input-group w-full">
                <label htmlFor="tel">Téléphone</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Téléphone"
                  onChange={getTelephone}
                />
              </div>
            </div>

            {/* <div className="input-group">
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Adresse"
                onChange={getTelephone}
              />
            </div> */}
          </div>
          {/* <p>Informations professionnelles</p> */}
          <div className="section mt-10">
            <div className="input-group">
              <Autocomplete
                multiple
                id="multiple-limit-tags"
                options={skills_tab}
                getOptionLabel={(option) => option.title}
                defaultValue={[skills_tab[0], skills_tab[1]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="skills"
                    label="Ajouter une compétence"
                    placeholder="Ajouter une compétence"
                  />
                )}
                onChange={(event, value) => {
                  console.log("Seconde");
                  console.log(value);
                }}
              />
            </div>
            <div className="input-group">
              <p className="my-5 font-bold">Expériences</p>
              <div className="user-experiences">
                {[0, 1].map((item, index) => {
                  return (
                    <div key={index} className="grid gap-1 mb-5">
                      <div className="period font-bold text-sm flex gap-1 items-center">
                        <span className="flex gap-3 items-center">
                          <Api sx={{ fontSize: "16px" }} />
                          <span>Mai 2021</span>
                        </span>
                        <span> à </span>
                        <span>Octobre 2022</span>
                      </div>
                      <div className="experience-text text-justify text-sm text-gray-700">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nam beatae eaque nostrum blanditiis? Ex totam
                        dolor, exercitationem nulla animi veritatis impedit nam
                        quam nihil ipsa in corporis mollitia molestiae quis!
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="add-experience grid gap-2">
                <p className="font-bold">Ajouter une expérience</p>
                <div className="flex gap-5 items-center">
                  <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    placeholder="Date de début"
                  />
                  <span> À </span>
                  <input
                    type="date"
                    name="end-date"
                    id="end-date"
                    placeholder="Date de fin"
                  />
                </div>
                <textarea
                  className="w-full"
                  name="experience-descripion"
                  id="experience-descripion"
                  cols="30"
                  rows="5"
                  placeholder="Décrivez votre expérience"
                ></textarea>
                <button
                  className="py-2 my-2 text-white font-bold"
                  style={{ background: "#653F56", borderRadius: "20px" }}
                >
                  Ajouter
                </button>
              </div>
            </div>
            <div className="input-group my-10">
              <label htmlFor="bio">Ma bio</label>
              <textarea
                className="w-full"
                name="bio"
                id="bio"
                cols="30"
                rows="5"
                placeholder="Modifier ma bio"
                // onChange={getFirmPresentation}
              ></textarea>
            </div>

            <div className="flex gap-5 mb-5">
              <div className="input-group w-full">
                <label htmlFor="newPassword">Nouveau mot de passe</label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Mot de passe"
                  onChange={getPassword1}
                />
              </div>
              <div className="input-group w-full">
                <label htmlFor="newPassword">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  name="newPassword2"
                  id="newPassword2"
                  placeholder="Confirmer le mot de passe"
                  onChange={getPassword2}
                />
              </div>
            </div>
            <div className="input-group">
              <FormGroup>
                <FormControlLabel
                  control={<Switch />}
                  label="Passer en mode recruteur"
                />
              </FormGroup>
            </div>
          </div>
      </div>
      <button
        className="py-2 my-10 w-full text-white font-bold"
        style={{ background: "#653F56", borderRadius: "20px" }}
      >
        Appliquer les modifications
      </button>
    </div>
  );
};

export default Profile;
