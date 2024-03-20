import React from "react";
import TestimonySwiper from "../TestimonySwiper";
import "./index.scss";

const Testimony = ({ auth }) => {
  return (
    <div className="Testimony">
      <h1>Ce que nos clients disent</h1>
      <h6>Neque, pulvinar vestibulum non aliquam.</h6>

      <TestimonySwiper />

      {auth ? (
        <div className="comment">
          <input type="text" name="comment-text" placeholder=""/>
          fe
        </div>
      ) : null}
    </div>
  );
};

export default Testimony;
