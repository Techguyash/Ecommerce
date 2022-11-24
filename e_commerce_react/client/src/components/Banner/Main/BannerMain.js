import React from "react";
import imgUrl from "../../../assets/home/home.png";
import Button from "../../UI/Button";
const Banner = () => {
  return (
    <section class="home" id="home">
      <div class="home__container bd-grid">
        <div class="home__data">
          <h1 class="home__title">
            NEW <br />
            <span>ARRIVALS</span>
          </h1>
          <Button> GO SHOPPING</Button>
        </div>
        <img src={imgUrl} alt="" class="home__img" />
      </div>
    </section>
  );
};

export default Banner;
