import React from "react";
// import Iphone from "../assets/images/iphone-14.jpg";
// import HoldingIphone from "../assets/images/iphone-hand.png";

function jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      {/* <img className="logo" src={Iphone} alt="iphone" /> */}
      <h1 className="title">Tachikoma</h1>
      <p className="text">Bigger And Better </p>
      <span className="description"> Advanced AI System</span>

      <ul className="links">
        <li>
          <button className="button">Inquire</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            learn more
          </a>
        </li>
      </ul>
      {/* <img className="iphone-img" src={HoldingIphone} alt="iphone" /> */}
    </div>
  );
}

export default jumbotron;
