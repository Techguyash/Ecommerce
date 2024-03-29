import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/home/new1.png";
import img2 from "../../../assets/home/new2.png";
import img3 from "../../../assets/home/new3.png";
import img4 from "../../../assets/home/new4.png";
import img5 from "../../../assets/home/new5.png";
import img6 from "../../../assets/home/new6.png";
import NewProduct from "./NewProduct";

const NewArrivals = () => {
  return (
    <section className="new section" id="new">
      <h2 className="section-title">NEW ARRIVALS</h2>
      <NavLink to={"/showproducts"} className="section-all">
        VIEW ALL
      </NavLink>

      <div className="new__container bd-grid">
        <NewProduct img={img1} />
        <NewProduct img={img2} />
        <NewProduct img={img3} />
        <NewProduct img={img4} />
        <NewProduct img={img5} />
        <NewProduct img={img6} />
      </div>
    </section>
  );
};

export default NewArrivals;
