import React from "react";
import heroBg from "../../assets/bg-shadow.png";
import heroLogo from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <>
      <div
        className="hero max-w-7xl mx-auto rounded-2xl py-10"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-content  text-center">
          <div className=" items-center flex flex-col space-y-5">
            <figure>
              <img src={heroLogo} alt="" className="w-60" />
            </figure>
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <button className="btn btn-warning">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
