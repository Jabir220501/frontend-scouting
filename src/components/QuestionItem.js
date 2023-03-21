import React from "react";

function QuestionItem(props) {
  return (
    <div class="questionList max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm mb-10">
      <h5 class="mb-7 text-2xl font-bold tracking-tight text-gray-900 ">
        {props.question}
      </h5>
      <div className="item flex items-center justify-evenly mb-4">
        <label className="ml-2 text-sm font-medium text-gray-900">
          <input
            type="radio"
            value="1"
            name={props.name + "_1"}
            class="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          1
        </label>
        <label className="ml-2 text-sm font-medium text-gray-900">
          <input
            type="radio"
            value="2"
            name={props.name + "_2"}
            class="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          2
        </label>
        <label className="ml-2 text-sm font-medium text-gray-900">
          <input
            type="radio"
            value="3"
            name={props.name + "_3"}
            class="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          3
        </label>
        <label className="ml-2 text-sm font-medium text-gray-900">
          <input
            type="radio"
            value="4"
            name={props.name + "_4"}
            class="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          4
        </label>
        <label className="ml-2 text-sm font-medium text-gray-900">
          <input
            type="radio"
            value="5"
            name={props.name + "_5"}
            class="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          5
        </label>
      </div>
    </div>
  );
}

export default QuestionItem;
