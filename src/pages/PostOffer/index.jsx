import { PlusOne } from "@mui/icons-material";
import React from "react";
import { FaPlus } from "react-icons/fa";
import "./index.scss";

const PostOffer = () => {
  return (
    <div className="PostOffer">
      <div className="extras">
        <div className="box">
          <FaPlus className="text-5xl"/>
          <p>Ajouer une offre</p>
        </div>
        <div className="requests">
          <button>Voir en tant que demandeur</button>
          <button>Voir tous mes posts</button>
          <button>Modifier un post</button>
        </div>
      </div>
      <div className="offer-infos">
        <h2>Description de l’offre</h2>
        <input type="text" name="title" id="title" placeholder="Intitulé" />
        <input type="text" name="description" id="description" placeholder="Description" />
        <input type="text" name="duration" id="duration" placeholder="Durée" />
        <button>Poster</button>
      </div>
    </div>
  );
};

export default PostOffer;
