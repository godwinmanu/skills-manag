import React from "react";
import Presentation from "../../components/Presentation";
import Offers from "../../components/Offers";
import card1 from "../../assets/img/Rectangle1.png";
import card2 from "../../assets/img/Rectangle2.png";
import card3 from "../../assets/img/Rectangle3.png";
import card4 from "../../assets/img/Rectangle4.png";
import card5 from "../../assets/img/Rectangle5.png";
import card6 from "../../assets/img/Rectangle6.png";
import Testimony from "../../components/Testimony";

const cardsData = [
  {
    image: card3,
    fullname: "SOS TECH",
    job: "Manager Marketing",
    location: "Lokossa",
  },
  {
    image: card2,
    fullname: "AYABA Assibavi",
    job: "Manager Marketing",
    location: "Lokossa",
  },
  {
    image: card5,
    fullname: "AYABA Assibavi",
    job: "Manager Marketing",
    location: "Lokossa",
  },
  {
    image: card4,
    fullname: "AYABA Assibavi",
    job: "Manager Marketing",
    location: "Lokossa",
  },
  {
    image: card1,
    fullname: "AYABA Assibavi",
    job: "Manager Marketing",
    location: "Lokossa",
  },
  {
    image: card6,
    fullname: "AYABA Assibavi",
    job: "Manager Marketing",
    location: "Lokossa",
  },
  
];

const MemberSpace = () => {
  return (
    <div className="">
      <Presentation />
      <Offers cardsData={cardsData} />
      <Testimony auth={false} />
    </div>
  );
};

export default MemberSpace;
