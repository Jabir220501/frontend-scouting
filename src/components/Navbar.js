import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  useEffect(() => {
    setPercentage(localStorage.getItem("progress"));
  });

  const handleProgress = (percentage) => {
    localStorage.setItem("progress", percentage);
  };

  return (
    <div className="navbar fixed w-full top-0 h-20 bg-white border-r border-b border-gray-100">
      <nav className="flex justify-center items-center h-full pt-0 pr-36 pb-0 pl-8">
        <h1 className="mr-auto text-xl text-blue-600 font-medium">Scouting</h1>
        <ul className="flex text-gray-500">
          <a
            href="./"
            className="pr-16"
            onClick={url === "/" ? handleProgress(0) : ""}
          >
            <li className={"text-sm " + (url === "/" ? " active" : "")}>
              01. Je gegevens
            </li>
          </a>
          <a
            href="/uitleg  "
            className="pr-16"
            onClick={url === "/uitleg" ? handleProgress(25) : ""}
          >
            <li className={"text-sm" + (url === "/uitleg" ? " active" : "")}>
              02. Uitleg
            </li>
          </a>
          <a
            href="./taak-1"
            className="pr-16"
            onClick={url === "/taak-1" ? handleProgress(50) : ""}
          >
            <li className={"text-sm" + (url === "/taak-1" ? " active" : "")}>
              03. Taak 1
            </li>
          </a>
          <a
            href="taak-2"
            className="pr-16"
            onClick={url === "/taak-2" ? handleProgress(75) : ""}
          >
            <li className={"text-sm" + (url === "/taak-2" ? " active" : "")}>
              04. Taak 2
            </li>
          </a>
          <a
            href="taak-3"
            className="pr-16"
            onClick={url === "/taak-3" ? handleProgress(100) : ""}
          >
            <li className={"text-sm" + (url === "/taak-3" ? " active" : "")}>
              05. Taak 3
            </li>
          </a>
        </ul>
      </nav>

      <div class="w-full bg-gray-200 rounded-r-full h-2">
        <div
          className={
            "percentageBar bg-blue-600 h-2 rounded-r-full " +
            (`w-${percentage}`)
          }
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
