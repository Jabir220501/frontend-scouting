import React from "react";

function TableRow(props) {
  return (
    <tr class="border-b border-gray-200 ">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
      >
        {props.maxScore}
      </th>
      <td class="px-6 py-4">{props.score}</td>
      <td class="px-6 py-4 bg-gray-50 ">{props.procent}</td>
      <td class="px-6 py-4">
       {props.hoofdzaak}
      </td>
    </tr>
  );
}

export default TableRow;
