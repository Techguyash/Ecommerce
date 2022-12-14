import React from "react";
import "./Home.css";
import BannerMain from "../../components/Banner/Main/BannerMain";
import BannerCollection from "../../components/Banner/collections/Collections";
import NavBar from "../../components/Navbar/NavBar";
import FeaturedProducts from "../../components/Banner/Features/FeaturedProducts";
import AdBanner from "../../components/Banner/AdBanner";
import NewArrivals from "../../components/Banner/NewArrivals/NewArrivals";
import Subscription from "../../components/Banner/Subscription/Subscription";
import Footer from "../../components/Banner/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="l-main">
        <BannerMain />
        <BannerCollection />
        <FeaturedProducts />
        <AdBanner
          title="Special Offer"
          description=" Special offers discounts for women this week only"
        />
        <NewArrivals />
        <Subscription />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
