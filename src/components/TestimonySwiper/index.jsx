import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";
import "./index.scss";
import userCommentPhoto from "../../assets/img/user-comment-photo.png";

let SwiperData = [
  {
    username: "Courtney Henry",
    message: `"Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc."`,
  },
  {
    username: "Courtney Henry",
    message: `"Tincidunt risus, blandit proin semper. Tellus ac pellentesque convallis vitae. Lorem enim cursus et consequat viverra id justo ullamcorper. Vel."`,
  },
  {
    username: "Courtney Henry",
    message: `"Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc."`,
  },
  {
    username: "Courtney Henry",
    message: `"Tincidunt risus, blandit proin semper. Tellus ac pellentesque convallis vitae. Lorem enim cursus et consequat viverra id justo ullamcorper. Vel."`,
  },
];

const getViewportWidth = () => {
  if (window.innerWidth <= 450) {
    return 1;
  } else {
    return 2;
  }
};

const TestimonySwiper = ({ auth }) => {
  const [blocNumber, setBlocNumber] = useState(getViewportWidth);

  useEffect(() => {
    const handleSetBlocNumber = () => {
      setBlocNumber(getViewportWidth);
    };

    window.addEventListener("resize", handleSetBlocNumber);
  }, []);

  return (
    <div className="TestimonySwiper m-10">
      <Swiper
        onSwiper={null}
        slidesPerView={blocNumber}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        {SwiperData.map((item, i) => (
          <SwiperSlide key={i} className="swiper-item">
            <p className="stars">
              {[0, 1, 2, 3, 4].map((item) => (
                <AiFillStar style={{ color: "#3261E9", fontSize: 18 }} />
              ))}
            </p>
            <div className="comment-message">{item.message}</div>
            <div className="comment-user">
              <img src={userCommentPhoto} alt="User Comment Photo" />
              <p>{item.username}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonySwiper;
