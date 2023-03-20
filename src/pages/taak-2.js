import React from "react";
import QuestionItem from "../components/QuestionItem";

function Taak2() {
  return (
    <div>
      <div className="content question h-full flex items-center justify-center bg-gray-50">
        <div className="h-full mt-20">
          <QuestionItem
            question="2.1 Belang van de kwaliteit van het activiteitenprogramma."
            name="2.1"
          />
          <QuestionItem
            question="2.2 Bewaken kwalititeit van het activiteitenprogramma samen met jongeren, rekening houdend met de progressiematrix."
            name="2.2"
          />
          <QuestionItem
            question="2.3 Actieve rol aannemen in begeleiding nieuwe teamleden of coaches/adviseurs tijdens introductiefase."
            name="2.3"
          />
          <QuestionItem
            question="2.4 Kwaliteit leidingteam bewaken, in overleg met team"
            name="2.4"
          />
          <QuestionItem
            question="2.5 Kwaliteit leidingteam verbeteren, in overleg met team"
            name="2.5"
          />
          <QuestionItem
            question="2.6 Kwaliteit leidingteam (explo) of speltak (rover) bewaken, in overleg met groeps- en praktijkbegeleider"
            name="2.6"
          />
          <QuestionItem
            question="2.7 Ontwikkelplan team opstellen, in overleg met groeps- em praktijkbegeleider"
            name="2.7"
          />
          <QuestionItem
            question="2.8 Complexe leeftijds- en gedragskenmerken in de eigen en naastliggende speltak verklaren, rekening houdend met ontwikkeling brein."
            name="2.8"
          />
          <QuestionItem
            question="2.9 Binnen leidingteam (explo) of de speltak (rover) reflecteren op elkaars houding en gedrag."
            name="2.9"
          />
          <QuestionItem
            question="2.10 Stimuleren en motiveren explorers, teamleden of roverscouts in houdig en gedrag goed voorbeeld te geven."
            name="2.10"
          />
          <QuestionItem
            question="2.11 Initiatief (regelmatig) teamoverleg en evaluatie explorers en leidingteam (explo) of stambestuur, coaches en medeadviseurs (rovers)."
            name="2.11"
          />
          <QuestionItem
            question="2.12 Zorgen zinvol overleg/evaluatie voor samenwerking en kwaliteit van spel."
            name="2.12"
          />
          <a href="/taak-3" className="w-full">
            <button className="loginFormSubmit bg-blue-600 p-2 w-full text-white rounded-lg text-white shadow-sm shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Volgende
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Taak2;
