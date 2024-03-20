import { useEffect, useState } from "react";
import "./index.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  getDepartments,
  getDistricts,
  getNeighborhoods,
  getTowns,
} from "../../utils/areas_api";
import { getRequest, postRequest } from "../../utils/api";

const skills_tab = [
  { libelle: "JavaScript" },
  { libelle: "Laravel" },
  { libelle: "Python" },
  { libelle: "Django" },
  { libelle: "ReactJS" },
  { libelle: "Stratégie B2B" },
  { libelle: "Tunel de vente" },
];

const activities_tab = [
  { libelle: "Développement web" },
  { libelle: "Développement mobile" },
  { libelle: "Marketing" },
  { libelle: "Facebook ads" },
  { libelle: "Enseignement" },
  { libelle: "Référencement Web" },
  { libelle: "Gestion de resources humaines" },
];

const remove = (e) => {
  alert(e);
  e.remove();
};

const Experience = `
  <div class="experience" style="display : grid; gap : 7px; margin : 20px 0px; width : 100%;">
  <div style="display : flex; justify-content : flex-end;">
  <span onclick="(function removeExperience(event.target){
    console.log(event.target);
  };
)(event.target);" style="font-size : 18px; padding : 10px 20px; border-radius : 22px; background-color : #F2F2F2; cursor : pointer;">&times;</span>
  </div>
    <div style="display : flex; gap : 20px; align-items : center;">
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
      name="experience-descripion"
      id="experience-descripion"
      cols="30"
      rows="5"
      placeholder="Décrivez votre expérience"
    ></textarea>
  </div>
`;

const Signup = () => {
  const [departments, setDepartments] = useState();
  const [towns, setTowns] = useState();
  const [districts, setDistricts] = useState();
  const [neighborhoods, setNeighborhoods] = useState();
  const [userRole, setUserRole] = useState("demandeur");
  const [resumeFile, setResumeFile] = useState();
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [skillsList, setSkillsList] = useState();
  const [activityList, setActivityList] = useState();
  const [fetchedActivitySectors, setFetchedActivitySectors] = useState();
  const [fetchedSkills, setFetchedSkills] = useState();
  const [userInfos, setUserInfos] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password1: "",
    password2: "",
    telephone: "",
    firmEnterprise: "",
    firmIFU: "",
    firmPresentation: "",
    userPresentation: "",
    department: "",
    town: "",
    district: "",
    neighborhood: "",
  });

  const SignUserUp = async (e) => {
    e.preventDefault();
    const experiencesList = document.querySelectorAll(".experience");

    experiencesList.forEach((element) => {
      if (
        element.childNodes[3].childNodes[1].value === "" ||
        element.childNodes[3].childNodes[5].value === "" ||
        element.childNodes[5].value === ""
      ) {
        console.log("Bad experience input");
      } else {
        /* console.log({
          start_date: element.childNodes[3].childNodes[1].value,
          end_date: element.childNodes[3].childNodes[5].value,
          text: element.childNodes[5].value,
        }); */

        setExperiences((currentArray) => [
          ...currentArray,
          {
            start_date: element.childNodes[3].childNodes[1].value,
            end_date: element.childNodes[3].childNodes[5].value,
            libelle: element.childNodes[5].value,
          },
        ]);
      }
    });
    try {
      /* let requestObject = {
        name: userInfos.lastname,
        firstname: userInfos.firstname,
        email: userInfos.email,
        birthdate: "null",
        telephone: userInfos.telephone,
        cvfilepath: resumeFile,
        photofilepath: "null",
        ifu: "null",
        presentation: userInfos.userPresentation,
        role: userRole.toUpperCase(),
        password: userInfos.password1,
        quartier: userInfos.neighborhood,
        arrondissement: userInfos.district,
        commune: userInfos.town,
        departement: userInfos.department,
        experiences: experiences,
        competences: skillsList.filter((item) => ({
          competence_id: item.id,
        })),
        activities: activityList.filter((item) => ({
          activity_id: item.id,
        })),
        employment_status: userRole === "demandeur" ? "Sans emploi" : null,
        enterprise_name: userInfos.firmEnterprise,
        enterprise_ifu: userInfos.firmIFU,
      }; */
      // console.log(requestObject);
      // const response = await postRequest("/auth/inscription", requestObject);
      // setRegistrationStatus(true)
      // console.log(response.data);
      let userObjectStringify = JSON.stringify({
        access_token:
          /*  userObject.data.data.access_token */ "$ZD5:8484dzff4weef74044142855",
        username: /* userObject.data.data.user.username */ "Username",
        x: /* userObject.data.data.user.id */ 1,
      });
      localStorage.setItem("user", userObjectStringify);
      window.location.href = "member-space";
    } catch (error) {
      console.log(error.message);
    }
  };

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

  const getUserRole = (e) => {
    setUserRole(e.target.value);
  };

  const getResumeFile = (e) => {
    setResumeFile(e.target.files[0]);
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

  const getTelephone = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      telephone: e.target.value,
    }));
  };

  const getFirmEnterprise = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      firmEnterprise: e.target.value,
    }));
  };

  const getFirmIFU = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      firmIFU: e.target.value,
    }));
  };

  const getFirmPresentation = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      firmPresentation: e.target.value,
    }));
  };

  const getUserPresentation = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      userPresentation: e.target.value,
    }));
  };

  const getUserDepartment = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      department: e.target.value,
    }));

    getTowns(`/departments/${e.target.value}/towns`)
      .then((data) => setTowns(data.data.towns))
      .catch((error) => console.log(error));
  };

  const getUserTown = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      town: e.target.value,
    }));

    getDistricts(`/towns/${e.target.value}/districts`)
      .then((data) => setDistricts(data.data.districts))
      .catch((error) => console.log(error));
  };

  const getUserDistrict = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      district: e.target.value,
    }));

    getNeighborhoods(`/districts/${e.target.value}/neighborhoods`)
      .then((data) => setNeighborhoods(data.data.neighborhoods))
      .catch((error) => console.log(error));
  };

  const getUserNeighborhood = (e) => {
    setUserInfos((prevState) => ({
      ...prevState,
      neighborhood: e.target.value,
    }));
  };

  const addExperience = (e) => {
    e.preventDefault();
    document
      .querySelector(".experiences-container")
      .insertAdjacentHTML("afterend", Experience);
  };

  useEffect(() => {
    getDepartments()
      .then((response) => setDepartments(response.data.departments))
      .catch((error) => console.log(error));

    getRequest("/secteurs_activites")
      .then((response) => setFetchedActivitySectors(response.data))
      .catch((error) => console.log(error));

    getRequest("/competences")
      .then((response) => setFetchedSkills(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Signup">
      {registrationStatus ? (
        <div className="py-20 px-5 text-center">
          <p>
            {" "}
            Nous avons envoyé un mail à l'adresse{" "}
            <span className="text-orange-500">{userInfos.email}</span>.
          </p>
          <p>
            {" "}
            Veuillez cliquer sur le lien pour vérifier votre adresse e-mail.
          </p>
        </div>
      ) : (
        <form onSubmit={SignUserUp}>
          <h2>Inscription</h2>
          <div className="fields">
            <div className="flex gap-5">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Nom"
                onChange={getLastname}
              />
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Prénoms"
                onChange={getFirstname}
              />
            </div>
            <div className="flex gap-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Adresse Email"
                onChange={getEmail}
              />
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Téléphone"
                onChange={getTelephone}
              />
            </div>
            <div className="flex gap-5">
              <select onChange={getUserDepartment}>
                <option selected disabled>
                  Département
                </option>
                {departments
                  ? departments.map((department, index) => {
                      return (
                        <option key={index} value={department.name}>
                          {department.name}
                        </option>
                      );
                    })
                  : null}
              </select>
              <select onChange={getUserTown}>
                <option selected disabled>
                  Commune
                </option>
                {towns
                  ? towns.map((town, index) => {
                      return (
                        <option key={index} value={town.name}>
                          {town.name}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <div className="flex gap-5">
              <select onChange={getUserDistrict}>
                <option selected disabled>
                  Arrondissement
                </option>
                {districts
                  ? districts.map((district, index) => {
                      return (
                        <option key={index} value={district.name}>
                          {district.name}
                        </option>
                      );
                    })
                  : null}
              </select>
              <select onChange={getUserNeighborhood}>
                <option selected disabled>
                  Quartier
                </option>
                {neighborhoods
                  ? neighborhoods.map((neighborhood, index) => {
                      return (
                        <option key={index} value={neighborhood.name}>
                          {neighborhood.name}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <div className="flex gap-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                onChange={getPassword1}
              />
              <input
                type="password"
                name="password_2"
                id="password_2"
                placeholder="Confirmer le mot de passe"
                onChange={getPassword2}
              />
            </div>
            <select onChange={getUserRole}>
              <option selected disabled>
                Sélectionner un profil
              </option>
              <option value="demandeur">Demandeur</option>
              <option value="recruteur">Recruteur</option>
            </select>
            {userRole === "recruteur" ? (
              <>
                {/* Employee fields */}
                <div className="flex gap-5">
                  <input
                    type="text"
                    name="firmname"
                    id="firmname"
                    placeholder="Nom de l'entreprise"
                    onChange={getFirmEnterprise}
                  />
                  <input
                    type="text"
                    name="ifu"
                    id="ifu"
                    placeholder="Numéro IFU"
                    onChange={getFirmIFU}
                  />
                </div>
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={
                    fetchedActivitySectors
                      ? fetchedActivitySectors
                      : activities_tab
                  }
                  getOptionLabel={(option) => option.libelle}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Secteurs d'activité"
                      placeholder="Secteurs d'activité"
                    />
                  )}
                  onChange={(event, value) => {
                    console.log("first");
                    console.log(value);
                  }}
                />
                <textarea
                  name="bio"
                  id="bio"
                  cols="30"
                  rows="5"
                  placeholder="Présentation de l'entreprise"
                  onChange={getUserPresentation}
                ></textarea>
              </>
            ) : (
              <>
                {/* Recruteur fields */}
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={fetchedSkills ? fetchedSkills : skills_tab}
                  getOptionLabel={(option) => option.libelle}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="skills"
                      label="Choisissez vos compétences"
                      placeholder="Choisissez vos compétences"
                    />
                  )}
                  onChange={(event, value) => {
                    setSkillsList(value);
                  }}
                />
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={
                    fetchedActivitySectors
                      ? fetchedActivitySectors
                      : activities_tab
                  }
                  getOptionLabel={(option) => option.libelle}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Secteurs d'activité"
                      placeholder="Secteurs d'activité"
                    />
                  )}
                  onChange={(event, value) => {
                    setActivityList(value);
                  }}
                />
                <div className="experiences mb-3">
                  <div>
                    <span>Expériences</span>
                    <span>
                      <button
                        className="add-experience"
                        onClick={(e) => addExperience(e)}
                      >
                        Ajouter une expérience
                      </button>
                    </span>
                  </div>
                  <div className="experiences-container"></div>
                </div>
                <label id="resume_label" htmlFor="resume">
                  {resumeFile ? resumeFile.name : "Uploader votre CV"}
                </label>
                <input
                  hidden
                  type="file"
                  name="resume"
                  id="resume"
                  placeholder="Cliquez pour uploader votre CV"
                  onChange={(e) => getResumeFile(e)}
                  accept=".pdf"
                />
                <textarea
                  name="bio"
                  id="bio"
                  cols="30"
                  rows="5"
                  placeholder="Présentez-vous brièvement"
                  onChange={getUserPresentation}
                ></textarea>
              </>
            )}
          </div>
          <button id="submit" type="submit">
            S'inscrire
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
