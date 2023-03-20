import React from "react";
import "../index.css";

function Uitleg() {
  return (
    <div>
      <div className="content h-screen flex items-center justify-center bg-gray-50">
        <div>
          <h1 className="text-2xl">Uitleg</h1>
          <div>
            <ul className="list-decimal mt-7 mb-7">
              <li>
                Bij scouting moeten leiders veel dingen weten. Dat staat in een
                lijst.
              </li>
              <li>
                Leiders moeten zeggen hoe goed ze al zijn in deze dingen. Dit
                doen ze met een cijfer van 1 tot 5.
              </li>
              <li>
                Als ze het wel kennen, maar nog nooit hebben gedaan, is het een
                2.
              </li>
              <li>
                Leiders kunnen dan zien wat ze al goed kunnen en wat nog beter
                kan.
              </li>
              <li>
                Hierdoor kunnen ze workshops en gesprekken plannen om nog beter
                te worden.
              </li>
            </ul>
          </div>
          <p className="mb-7 font-medium">
            Beantwoord de vragen zo eerlijk mogelijk. Er bestaat geen goed of
            fout, je kunt er enkel van leren!
          </p>
          <div className="mb-7">
            <div className="flex items-center">
              <button
                type="button"
                class="bg-blue-600 p-2 text-white rounded-lg shadow-sm shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                1
              </button>
              <p>is mij onbekend/ kan ik niet</p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-blue-600 p-2 text-white rounded-lg shadow-sm shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                2
              </button>
              <p>ik weet ervan, maar heb het nooit gebruikt</p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-blue-600 p-2 text-white rounded-lg shadow-sm shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                3
              </button>
              <p>ik weet het en kan het toepassen</p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-blue-600 p-2 text-white rounded-lg shadow-sm shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                4
              </button>
              <p>ik kan het toepassen in andere situaties / omstandigheden</p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-blue-600 p-2 text-white rounded-lg shadow-sm shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                5
              </button>
              <p>
                ik kan een ander uitleggen wat het is en hoe je het kan
                toepassen
              </p>
            </div>
          </div>
      <a href="/taak-1" className="w-full">
          <button
            className="loginFormSubmit bg-blue-600 p-2 w-full text-white rounded-lg text-white shadow-sm shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Volgende
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Uitleg;
