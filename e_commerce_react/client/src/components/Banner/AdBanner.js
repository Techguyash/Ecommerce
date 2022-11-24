import React from "react";
import img from "../../assets/home/offer.jpg";
import Button from "../UI/Button";
const AdBanner = ({ title, description }) => {
  let bgStyle = {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `center center`,
  };

  return (
    <section className="offer section">
      <div className="offer__bg" style={bgStyle}>
        <div className="offer__data">
          <h2 className="offer__title">{title}</h2>
          <p className="offer__description">{description}</p>
          <Button> SHOP NOW</Button>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
