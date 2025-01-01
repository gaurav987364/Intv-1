import { useEffect, useState } from "react";
import DataShow from "./components/DataShow";
import HOC from "./components/HOC";
import Child from "./components/Child";
import SearchComponent from "./components/Filter";

function App() {
  return (
    <>
    <div>
      <SearchComponent/>
    </div>
    </>
  )
}

export default App;
