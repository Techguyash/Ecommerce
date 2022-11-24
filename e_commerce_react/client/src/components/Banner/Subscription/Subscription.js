import React from "react";
import Button from "../../UI/Button";

const Subscription = () => {
  return (
    <section class="newsletter section" id="suscribed">
      <div class="newsletter__container bd-grid">
        <div class="newsletter__suscribe">
          <h2 class="section-title">OUR NEWSLETTER</h2>
          <p class="newsletter_description">promotion new products and sales</p>

          <form action="" class="newsletter__form">
            <input
              type="text"
              class="newsletter__input"
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
