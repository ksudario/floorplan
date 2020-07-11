import React from "react";
import ReactDOM from "react-dom";
import FloorPlan from "./FloorPlan";


function App() {
  return (
    <FloorPlan />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);