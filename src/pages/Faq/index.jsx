import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./index.scss";
import landingImage from "../../assets/img/landing.svg";
import CustomAccordion from "../../components/CustomAccordion"

const Faq = () => {
  return (
    <div className="Faq">
      <div className="landing">
        <div className="landing-text">
          <p>Skill Manag</p>
          <div>Solution innovante pour résoudre 90% du chômage au Bénin</div>
          <div className="view-jobs">
            <button>
              Voir les emplois <FaAngleRight />{" "}
            </button>
          </div>
        </div>
        <div className="illustration">
          <img src={landingImage} alt="" />
        </div>
      </div>
      <div className="questions-answers">
        <h1>Foire aux Questions</h1>
        <p>
          Nous avons recensé ici la majorité des questions que vous pouvez vous
          posé sur notre site web
        </p>
        <div className="CustomAccordion">
          <CustomAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
