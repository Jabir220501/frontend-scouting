import React from "react";

function Navbar() {
  return (
    <div className="navbar fixed w-full top-0 h-20 bg-white border-r border-b border-gray-100">
      <nav className="flex justify-center items-center h-full pt-0 pr-36 pb-0 pl-8">
        <h1 className="mr-auto">Scouting</h1>
        <ul className="flex">
          <a href="./" className="pr-16">
            <li>01.Login</li>
          </a>
          <a href="./" className="pr-16">
            <li>02.Vraag 1</li>
          </a>
          <a href="./" className="pr-16">
            <li>03.Vraag 2</li>
          </a>
          <a href="./" className="pr-16">
            <li>04.Vraag 3</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
