// import { useEffect, useState } from "react";
// import DataShow from "./components/DataShow";
// import HOC from "./components/HOC";
// import Child from "./components/Child";
// import SearchComponent from "./components/Filter";

import SearchComponent from "./components/Filter";
import User from "./components/User";

function App() {
  return (
    <>
    <div className=" w-full min-h-screen p-5 bg-slate-800 text-neutral-100 flex justify-center">
      <SearchComponent/>
      <User/>
    </div>
    </>
  );
};

export default App;
