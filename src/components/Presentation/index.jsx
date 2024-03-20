import React, { useEffect, useState } from "react";
import "./index.scss";
import image1 from "../../assets/img/image_1.png"
import image2 from "../../assets/img/image_2.png"
import image3 from "../../assets/img/image_3.png"
import image4 from "../../assets/img/image_4.png"

const Presentation = () => {
  return (
    <div className="Presentation">
      <div className="presentation-text">
        Site des
        <br /> emplois
      </div>
      <div className="worker-people">
        <div className="image-row-1">
            <div><img src={image1} alt="" /></div>
            <div><img src={image2} alt="" /></div>
        </div>
        <div className="image-row-2">
            <div><img src={image3} alt="" /></div>
            <div><img src={image4} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
