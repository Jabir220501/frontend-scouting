import React from "react";

function Navbar() {
  return (
    <div className="navbar fixed w-full top-0 h-20 bg-white border-r border-b border-gray-100">
      <nav className="flex justify-center items-center h-full pt-0 pr-36 pb-0 pl-8">
        <h1 className="mr-auto text-xl text-blue-600 font-medium">Scouting</h1>
        <ul className="flex">
          <a href="./" className="pr-16">
            <li className="text-sm">01. Je gegevens</li>
          </a>
          <a href="/uitleg  " className="pr-16">
            <li className="text-sm">02. Uitleg</li>
          </a>
          <a href="./taak1" className="pr-16">
            <li className="text-sm">03. Taak 1</li>
          </a>
          <a href="./" className="pr-16">
            <li className="text-sm">04. Taak 2</li>
          </a>
          <a href="./" className="pr-16">
            <li className="text-sm">05. Taak 3</li>
          </a>
        </ul>
      </nav>

      <div class="w-full bg-gray-200 rounded-r-full h-2">
        <div class="bg-blue-600 h-2 rounded-r-full w-1/5"></div>
      </div>
    </div>
  );
}

export default Navbar;
