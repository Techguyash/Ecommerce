import React from "react";
import imgUrl from "../../../assets/home/home.png";
import Button from "../../UI/Button";
const Banner = () => {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <div className="home__data">
          <h1 className="home__title">
            NEW <br />
            <span>ARRIVALS</span>
          </h1>
          <Button> GO SHOPPING</Button>
        </div>
        <img src={imgUrl} alt="" className="home__img" />
      </div>
    </section>
  );
};

export default Banner;
