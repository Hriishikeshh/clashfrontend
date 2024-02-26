import React from "react";

const Option = ({ questionData }) => {
  return (
    <div class="grid grid-cols-2 gap-4 justify-around m-2">
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
        />
        <label
          for="bordered-radio-1"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {questionData.option1}
        </label>
      </div>
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-2"
          type="radio"
          value=""
          name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
        />
        <label
          for="bordered-radio-2"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {questionData.option2}
        </label>
      </div>
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-3"
          type="radio"
          value=""
          name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
        />
        <label
          for="bordered-radio-3"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {questionData.option3}
        </label>
      </div>
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-4"
          type="radio"
          value=""
          name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
        />
        <label
          for="bordered-radio-4"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {questionData.option4}
        </label>
      </div>
    </div>
  );
};

export default Option;
