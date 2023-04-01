import React from "react";

function jumbotron(): JSX.Element {
  const handleLearnMore: () => void = () => {
    const element: Element | null = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top ?? 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
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
    </div>
  );
}

export default jumbotron;
