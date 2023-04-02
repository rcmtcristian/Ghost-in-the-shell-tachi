import React from "react";
import { PowerGlitch } from "powerglitch";
import AnimatedLogo from "../assets/images/ghost-glitch.gif";

interface Props {}
// PowerGlitch.glitch(".glitch", {
//   playMode: "always",
//   hideOverflow: true,
//   timing: {
//     duration: 500,
//     iterations: 15,
//     easing: "ease-in-out",
//   },
//   glitchTimeSpan: {
//     start: 0.4,
//     end: 0.7,
//   },
//   shake: {
//     velocity: 10,
//     amplitudeX: 0.4,
//     amplitudeY: 0.4,
//   },
//   slice: {
//     count: 4,
//     velocity: 10,
//     minHeight: 0.02,
//     maxHeight: 0.4,
//     hueRotate: true,
//   },
// });
function Loader(props: Props) {
  return (
    <div className="loader glitch">
      <img className="logo " src={AnimatedLogo} alt="Loading..." />
    </div>
  );
}

export default Loader;
