import React from "react";
import TableRow from "../components/TableRow";

const ScoreDashboard = () => {
  return (
    <div className="content question h-full flex items-center justify-center bg-gray-50">
      <div className="h-full my-20">
        <div className="mb-16">
          <h2 className="text-2xl mb-6">Score overzicht</h2>
          <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" class="px-6 py-3 bg-gray-50">
                    Maximale score
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Mijn score
                  </th>
                  <th scope="col" class="px-6 py-3 bg-gray-50 :bg-gray-800">
                    Procent
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Hoofdzaken
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  maxScore="30"
                  score="0"
                  procent="0%"
                  hoofdzaak="Maken, voorbereiden en evalueren van scoutingprogramma's"
                />
                <TableRow
                  maxScore="55"
                  score="0"
                  procent="0%"
                  hoofdzaak="Uitvoeren van een scoutingprogramma"
                />
                <TableRow
                  maxScore="15"
                  score="0"
                  procent="0%"
                  hoofdzaak="Het begeleiden van jeugdleden in hun persoonlijke ontwikkeling"
                />
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" class="px-6 py-3 bg-gray-50">
                    Maximale score
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Mijn score
                  </th>
                  <th scope="col" class="px-6 py-3 bg-gray-50 :bg-gray-800">
                    Procent
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Modulen
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  maxScore="10"
                  score="0"
                  procent="0%"
                  hoofdzaak="Spelvisie en spelaanbod"
                />
                <TableRow
                  maxScore="20"
                  score="0"
                  procent="0%"
                  hoofdzaak="Scouting Academy"
                />
                <TableRow
                  maxScore="5"
                  score="0"
                  procent="0%"
                  hoofdzaak="Leeftijdseigen kenmerken"
                />
                <TableRow
                  maxScore="5"
                  score="0"
                  procent="0%"
                  hoofdzaak="Programmeren"
                />
                <TableRow
                  maxScore="5"
                  score="0"
                  procent="0%"
                  hoofdzaak="Motivatietechnieken en groepsproces"
                />
                <TableRow
                  maxScore="20"
                  score="0"
                  procent="0%"
                  hoofdzaak="Veiligheid"
                />
                <TableRow
                  maxScore="10"
                  score="0"
                  procent="0%"
                  hoofdzaak="Gewenst gedrag"
                />
                <TableRow
                  maxScore="10"
                  score="0"
                  procent="0%"
                  hoofdzaak="Evalueren"
                />
                <TableRow
                  maxScore="15"
                  score="0"
                  procent="0%"
                  hoofdzaak="Gespreks- en overlegvaardigheden"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDashboard;
