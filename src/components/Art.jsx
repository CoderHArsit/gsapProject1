"use client"; 
import React from "react";
import gsap from "gsap";
import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeLine
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">THE ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flext items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flext items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Pured with Passion</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>

            <p>
              This isn't just a drink. It's carefully crafted art, a symphony of
              flavors that dance on your palate. Each sip is a journey, a moment
              of pure bliss. Join us in celebrating the art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
