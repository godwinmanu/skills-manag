import React from "react";
import "./index.scss";
import { FaPlus } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsFillBookmarkFill, BsShareFill } from "react-icons/bs";
import jobInfos0 from "../../assets/img/job_info_0.png";
import jobInfos1 from "../../assets/img/job_info_1.png";
import jobInfos2 from "../../assets/img/job_info_2.png";
import jobInfos3 from "../../assets/img/job_info_3.png";
import jobInfos4 from "../../assets/img/job_info_4.png";
import jobInfos5 from "../../assets/img/job_info_5.png";
import jobInfos6 from "../../assets/img/job_info_6.png";
import userIcon from "../../assets/img/user_icon.svg";
import eyeIcon from "../../assets/img/icon _eye_.svg";

const images = [
  jobInfos1,
  jobInfos6,
  jobInfos5,
  jobInfos2,
  jobInfos3,
  jobInfos4
];

const JobInfos = () => {
  return (
    <div className="JobInfos">
      <div className="box-1">
        <div className="picture">
          <img src={jobInfos0} alt="Firm Brand Picture" />
        </div>
        <div className="offer-infos">
          <div className="sub-box">
            <div>
              <h4>Intitulé de l’offre</h4>
              <p>Fixation de pointe</p>
            </div>
            <div>
              <h4>Durée</h4>
              <p>Du 14 février au 22 Février 2023</p>
            </div>
          </div>
          <div className="desc">
            <h4>Description</h4>
            <p>
              Nous recherchons 2 ouvriers mécaniques disponible à plein temps.e
            </p>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="firm-cotations">
          <div className="icon">
            <img src={userIcon} alt="Firm Icon" />
          </div>
          <div className="name-actions">
            <p>Entreprise_Name/1000 Posts</p>
            <div className="follow">
              <button>
                <span>
                  <img src={eyeIcon} alt="Eye Icon" />
                </span>
                <span>Profil</span>
              </button>
              <button>
                <span>
                  {" "}
                  <FaPlus />{" "}
                </span>
                <span>Suivre</span>
              </button>
            </div>
          </div>
        </div>
        <div className="extra-buttons">
          <button title="Nombre de clics">
            <span>
              <CiStar className="text-2xl"/>
            </span>
            <span>500</span>
          </button>
          <button>
            <span>
              <BsFillBookmarkFill />
            </span>
          </button>
          <button>
            <span>
              <BsShareFill />
            </span>
          </button>
        </div>
        <button id="apply">Postuler</button>
        <button id="recent-posts">Posts récents</button>

        <div className="images-box">
          {images.map((path, index) => {
            return <img key={index} src={path} alt="Image" />;
          })}
        </div>
        <button id="read-more">Read more...</button>
      </div>
    </div>
  );
};

export default JobInfos;
