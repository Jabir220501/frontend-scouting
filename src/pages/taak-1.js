import React from "react";
import QuestionItem from "../components/QuestionItem";

function Taak1() {
  return (
    <div>
      <div className="content question h-full flex items-center justify-center bg-gray-50">
        <div className="h-full mt-20">
          <QuestionItem
            question="1.1 Periodiek planning taken en werkzaamheden maken (explo) of jongeren hierover adviseren (rover)."
            name="1.1"
          />
          <QuestionItem
            question="1.2 Bevorderen samenwerking leidingteam, zowel voor jeugdleden als voor leiding onderling."
            name="1.2"
          />
          <QuestionItem
            question="1.3 Bevorderen taakverdeling leidingteam, zowel voor jeugdleden als voor leiding onderling."
            name="1.3"
          />
          <QuestionItem
            question="1.4 Bevorderen gezamenlijke verantwoordelijkheid leidingteam, zowel voor jeugdleden als voor leiding onderling."
            name="1.4"
          />
          <QuestionItem
            question="1.5 Tonen daadkracht ten aanzien van veiligheid en optreden indien nodig."
            name="1.5"
          />
          <QuestionItem
            question="1.6 Leiderschap tonen bij crisis (voorspelbare situatie)"
            name="1.6"
          />
          <QuestionItem
            question="1.7 Aanpassen eigen houding situatie van het moment."
            name="1.7"
          />
          <QuestionItem
            question="1.8 Aanpassen eigen gedrag situatie van het moment."
            name="1.8"
          />
          <QuestionItem
            question="1.9 Juist afhandelen ongeval (onvoospelbare situatie) richting jeugdlid en ouders, in samenwerking met groepsbestuur."
            name="1.9"
          />
          <a href="/taak-2" className="w-full">
            <button className="loginFormSubmit bg-blue-600 p-2 w-full text-white rounded-lg text-white shadow-sm shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Volgende
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Taak1;
