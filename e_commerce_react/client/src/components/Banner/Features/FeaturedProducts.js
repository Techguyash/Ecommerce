import React, { useContext } from "react";
import FeaturePCard from "./FeaturePCard";
import { ProductContext } from "../../../context/productContext";
import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ProductContext);

  return (
    <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED PRODUCTS</h2>
      <NavLink to={"/showproducts"} className="section-all">
        VIEW ALL
      </NavLink>

      <div className="featured__container bd-grid">
        {featuredProducts.map((val) => {
          return (
            <FeaturePCard
              key={val.productId}
              id={val.productId}
              imgUrl={val.imageUrl[0].imageUrl}
              name={val.productName}
              price={val.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
