import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressSidebar() {
  const percentage = 25;
  return (
    <div className="w-60 h-full fixed top-0 z-50 bg-white right-0 border-l border-gray-100">
      <div className="w-40">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            path: {
              // Path color
              stroke: `rgb(37 99 235)`,
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              transformOrigin: "center center",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "rgb(229 231 235)",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the text
            text: {
              // Text color
              fill: "rgb(37 99 235)",
              // Text size
              fontSize: "16px",
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "rgb(37 99 235)",
            },

            width: "120px",
          }}
        />
      </div>
    </div>
  );
}

export default ProgressSidebar;
