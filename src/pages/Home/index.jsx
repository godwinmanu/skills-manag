import React, { useEffect, useState } from "react";
import Presentation from "../../components/Presentation";
import Offers from "../../components/Offers";
import userPhoto from "../../assets/img/userPhoto.png";
import Testimony from "../../components/Testimony";

const cardsData = [0, 1, 2, 3, 4, 5].map((item) => {
  return {
    image: userPhoto,
    fullname: "AYABA Assibavi",
    job: "Manager Marketing",
    location: "Lokossa",
  };
});

const Home = () => {
  return (
    <div className="Home">
      <Presentation />
      <Offers cardsData={cardsData} />
      <Testimony auth={false} />
    </div>
  );
};

export default Home;
