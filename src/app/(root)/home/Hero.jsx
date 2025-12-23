import React from "react";
import { ThumbnailVideo } from "../components";
const Hero = () => {
  return (
    <div className="max-w-200 mx-auto my-7 lg:my-12">
      <div className=" ">
        <h3 className="uppercase leading-12 md:leading-22 text-xl md:text-2xl lg:text-4xl font-bold ">
          <span className="text-brand-primary">reduce risks.</span>
          <br />
          <span className="text-brand-secondary">overcome challenges.</span>
          <br />
          <span className="text-brand-teal">10x profits.</span>
        </h3>
        <p className="text-base md:text-lg text-text-muted py-4 md:py-8 md:tracking-wide">
          A 2-hour Online Webinar Where I will Teach you{" "}
          <span className="text-brand-primary font-semibold">
            How To Mitigate Risks in Exports, Overcome Key Challenges,
          </span>{" "}
          <span className="text-brand-primary font-semibold">
            {" "}
            Implement the Right Strategies and Scale Your Export Business
          </span>{" "}
          From India.
        </p>
      </div>
      <div>
        <ThumbnailVideo />
      </div>
    </div>
  );
};

export default Hero;
