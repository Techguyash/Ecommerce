import React from "react";
import Button from "../../UI/Button";

const Subscription = () => {
  return (
    <section className="newsletter section" id="suscribed">
      <div className="newsletter__container bd-grid">
        <div className="newsletter__suscribe">
          <h2 className="section-title">OUR NEWSLETTER</h2>
          <p className="newsletter_description">promotion new products and sales</p>

          <form action="" className="newsletter__form">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Enter your Email"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
