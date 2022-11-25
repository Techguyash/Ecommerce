import React from "react";
import img1 from "../../../assets/home/backpackMan.png";
import img2 from "../../../assets/home/backpackWoman.png";
import CollectionCard from "./CollectionCard";
const BannerCollection = () => {
  return (
    <section className="collection section">
      <div className="collection__container bd-grid">
        <CollectionCard img={img1} heading="MEN" title="BACKPACK" />
        <CollectionCard img={img2} heading="WOMEN" title="BACKPACK" />
      </div>
    </section>
  );
};

export default BannerCollection;
