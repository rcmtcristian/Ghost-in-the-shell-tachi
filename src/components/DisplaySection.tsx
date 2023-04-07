import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <p className="text">Display</p>
      <span className="description">
        Inspect this technological marvel in all its glory
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
