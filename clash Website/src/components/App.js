import React from "react";
import Leaderboard from "./Leaderboard";
import Navbar from "./navbar";
import Qpanel from "./Qpanel";

function App() {
  return (
    <div class="h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-700">
      <Navbar />
      <Qpanel />
    </div>
  );
}

export default App;
