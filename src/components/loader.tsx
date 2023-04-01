import React from "react";
import AnimatedLogo from "../assets/images/castleLoader.gif";

interface Props {}

function Loader(props: Props) {
  return (
    <div className="loader">
      <img className="logo" src={AnimatedLogo} alt="Loading..." />
    </div>
  );
}

export default Loader;
