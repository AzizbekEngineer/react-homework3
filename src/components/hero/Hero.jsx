import React from "react";
import heroPhoto from "../../assets/images/hero.webp";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero__info container">
        <h2 className="hero__title">Buy Big. Get Bigger</h2>
        <p className="hero__desc">
          Get The Freestyle 2nd Gen portable projector with Gaming Hub when you
          buy a 98 QLED 4K." data-mobile-description="Get The Freestyle 2nd Gen
          portable projector with Gaming Hub when you buy a 98 QLED 4K."Get The
          Freestyle 2nd Gen portable projector with Gaming Hub when you buy a
          98" QLED 4K.
        </p>
        <button className="hero__btn">Buy now</button>
      </div>
    </section>
  );
};

export default Hero;
