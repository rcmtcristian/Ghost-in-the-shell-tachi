import React, { useEffect, useRef } from "react";
import { gsap, TimelineMax, Power4, Power2, Expo } from "gsap";
import loaderImage from "../assets/images/ghost-glitch.gif";

function Loader(props) {
  const overlayRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const loader = loaderRef.current;
    const overlayTL = new TimelineMax();
    const loaderTL = new TimelineMax();

    overlayTL.fromTo(overlay, 0, { top: 0, bottom: 0 }, { top: 0, bottom: 0 });

    loaderTL.fromTo(loader, 0, { y: 0, opacity: 0 }, { y: 0, opacity: 1 });

    const animateIn = () => {
      loaderTL.fromTo(
        loader,
        1.2,
        { y: "0", opacity: 0, delay: 0.3 },
        { y: 0, opacity: 1, delay: 0.6, ease: Power2.easeOut }
      );
      overlayTL.to(overlay, 1.2, {
        top: 0,
        bottom: 0,
        ease: Expo.easeInOut,
      });
    };

    const animateOut = () => {
      overlayTL.to(overlay, 1.2, {
        top: "100%",
        bottom: "100%",
        ease: Expo.easeInOut,
        delay: 0.25,
      });
      loaderTL.to(loader, 0.5, { y: "40", opacity: 0 });
    };

    const animateOut_2 = () => {
      overlayTL.to(overlay, 1.2, {
        top: "100%",
        bottom: "100%",
        ease: Expo.easeInOut,
        delay: 0.25,
      });
      loaderTL.to(loader, 0.5, { y: "-40", opacity: 0 });
    };

    animateIn();

    const timeout = setTimeout(() => {
      animateOut_2();
    }, 2000);

    return () => {
      clearTimeout(timeout);
      animateOut();
    };
  }, []);

  return (
    <div className="overlay" ref={overlayRef}>
      <div className="overlay-loader" ref={loaderRef}>
        <img className="logo-two" src={loaderImage} alt="" />
      </div>
    </div>
  );
}

export default Loader;
