import React from "react";
import "./index.scss";
import userPic from "../../assets/img/user.png";
import { FiEye } from "react-icons/fi";

const skills = [
  "Web design",
  "Graphism",
  "Software Engineer",
  "Web Master",
  "Gestion de projet",
];

const Workerinfos = () => {
  return (
    <div className="Workerinfos">
      <div className="pic-name">
        <img src={userPic} alt="Worker Picture" />
        <h2>TOBOU Charmel</h2>
      </div>
      <div className="worker-infos">
        <div className="basics">
          <div>
            <p>Email :</p>
            <a href={`mailto:${"toboucha@gmail.com"}`}>toboucha@gmail.com</a>
          </div>
          <div>
            <p>Adresse :</p>
            <div>Godomey</div>
          </div>
          <div>
            <p>Téléphone :</p>
            <a href={`tel:+:${"22960123564"}`}>22960123564</a>
          </div>
        </div>
        <div className="experiences">
          <p>Expériences</p>
          {[0, 1, 2, 3, 4].map((item, index) => {
            return (
              <li key={index}>A travaillé chez HArms de 02/12/22 à 02/12/24</li>
            );
          })}
        </div>
        <div className="skills">
          <p>Compétences</p>
          {skills.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
      <div className="bio-and-resume">
        <p>Ma bio</p>
        <div>
          Je suis très dynamique. Très inspiré, j’aime prendre le lead et
          travaillé en équipe. J’aime aussi la cuisine, le sport.
        </div>

        <a
          target="_blank"
          href="https://www.facebook.com"
          className="resume-file"
        >
          <FiEye />
          <span>CV</span>
        </a>
      </div>
    </div>
  );
};

export default Workerinfos;
