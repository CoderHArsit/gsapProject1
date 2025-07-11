import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>Where every cocktail is a masterpiece</h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail tells a story, and at our bar, we take pride in
              crafting drinks that are not just beverages but experiences. From
              the classic mojito to the exotic mango margarita, each cocktail is
              a blend of the finest ingredients and the passion of our skilled
              mixologists. Whether you're here for a casual evening or a special
              celebration, our cocktails are designed to elevate your spirits
              and create unforgettable memories.
            </p>
          </div>
          <p className="md:text-3xl text-xl font-bold">
            <span>4.5</span>
          </p>
          <p className="text-sm text-white-200">More than +12000 customers</p>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt1.png" alt="about-1" />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt1.png" alt="about-1" />
          </div>
        </div>{" "}
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt1.png" alt="about-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
