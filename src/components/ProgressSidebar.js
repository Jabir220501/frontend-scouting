import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useLocation } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";

function ProgressSidebar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  useEffect(() => {
    setPercentage(localStorage.getItem("progress"));
  });

  const pageName = (pageName) => {
    if(pageName === "/"){
      return "1/5"
    }
    if(pageName === "/uitleg"){
      return "2/5"
    }
    if(pageName === "/taak-1"){
      return "3/5"
    }
    if(pageName === "/taak-2"){
      return "4/5"
    }
    if(pageName === "/taak-3"){
      return "5/5"
    }
    if(pageName === "/score"){
      return "5/5"
    }
  };

  const percentageO = percentage;
  return (
    <div className="w-60 h-full fixed top-0 z-50 bg-white right-0 border-l border-gray-100">
      <div className="wrapper flex flex-col items-center justify-center mt-8 h-5/6">
        <div className="w-40 h-full">
          <CircularProgressbar
            value={percentageO}
            text={`${percentageO}%`}
            styles={{
              path: {
                stroke: `rgb(37 99 235)`,
                transition: "stroke-dashoffset 0.5s ease 0s",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "rgb(229 231 235)",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "rgb(37 99 235)",
                fontSize: "16px",
              },
              background: {
                fill: "rgb(37 99 235)",
              },

              width: "120px",
            }}
          />
        </div>
        <div className="flex items-center justify-between w-40 ">
          <h2 className="text-sm font-bold text-gray-800">{pageName(url)}</h2>
          <h2 className="text-md">
            {localStorage.getItem("naam") + " " + localStorage.getItem("groep")}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProgressSidebar;
