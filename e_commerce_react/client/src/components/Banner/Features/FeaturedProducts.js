import React from "react";
import img1 from "../../../assets/home/feature1.png";
import img2 from "../../../assets/home/feature2.png";
import img3 from "../../../assets/home/feature3.png";
import img4 from "../../../assets/home/feature4.png";
import FeaturePCard from "./FeaturePCard";
const FeaturedProducts = () => {
  return (
    <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED PRODUCTS</h2>
      <a href="#" className="section-all">
        VIEW ALL
      </a>

      <div className="featured__container bd-grid">
        <FeaturePCard imgUrl={img1} name="Headphone One Black" price="29" />
        <FeaturePCard imgUrl={img2} name="Speaker Beats Pill" price="199" />
        <FeaturePCard imgUrl={img3} name="Apple Air Pods" price="122" />
        <FeaturePCard imgUrl={img4} name="Smartwatch F9 Negro" price="99" />
      </div>
    </section>
  );
};

export default FeaturedProducts;
