import React, { useEffect, useState } from "react";
import "./index.scss";
import UserCard from "../../components/UserCard";
import { FiSearch } from "react-icons/fi";

const skillsList = [
  "Ingénieur",
  "Juriste",
  "Métier du BTP",
  "Manager de projet",
  "Développeur Web",
  "Secrétariat, assistanat",
];

const locationsList = ["Porto-Novo", "Cotonou"];


const Offers = ({cardsData}) => {
  return (
    <div className="Offers">
      <div className="members-locations-skills">
        <div className="search-input-group">
          <FiSearch className="search-icon" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Rechechez par compétences, ville, commune, département, etc..."
          />
        </div>
        <div className="box">
          <div className="locations-skills">
            <div className="locations">
              <h3 className="font-bold mb-1">Filtrer par région</h3>
              <div className="tag-container">
                {locationsList.map((location, index) => {
                  return (
                    <span key={index} className="tag">
                      {" "}
                      {location}{" "}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="skills">
              <h3 className="font-bold mb-1">Filtrer par métier</h3>
              <div className="tag-container">
                {skillsList.map((skill, index) => {
                  return (
                    <span key={index} className="tag">
                      {" "}
                      {skill}{" "}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="members">
            {cardsData.map((data, index) => {
              return <UserCard key={index} workerData={data} />;
            })}
            {skillsList.length >= 6 ? (
              <div className="view-more">
                <button>Voir plus</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
