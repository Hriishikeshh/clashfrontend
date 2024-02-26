import React, { useState } from "react";
import Option from "./Option";
import Question from "./Question";
import questions from "./questionlist";
import Leaderboard from "./Leaderboard";

const Qpanel = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className="box-border flex font-bold text-white mt-0">
      <div className="border-solid border-4 border-black rounded-xl flex-col w-screen mr-10 mx-5 h-94 w-128">
        <h1 className="m-2">Card title</h1>
        <Question questionData={questions[currentQuestionIndex]} />
        <Option questionData={questions[currentQuestionIndex]} />
        <div>
          <button
            onClick={handleNextQuestion}
            class="h-10 w-20 relative inline-flex items-center justify-center ml-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 to-blue-600 group-hover:from-green-100 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-20"
          >
            Next
          </button>
          <button class="h-10 w-20 relative inline-flex items-center justify-center ml-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 to-blue-600 group-hover:from-green-100 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-20">
            Submit
          </button>
        </div>
      </div>
      <Leaderboard />
    </div>
  );
};

export default Qpanel;
