import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">brit</h2>
      <p className="text">feel the jelly</p>
      <span className="description">
        many moneys many moneys many moneys many moneys many moneys many
      </span>
      <button className="button" onClick={triggerPreview}>
        try me!
      </button>
      <button className="back-button" onClick={handleScroll}>
        top
      </button>
    </div>
  );
}

export default DisplaySection;
