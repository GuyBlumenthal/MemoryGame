import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Board />
  </React.StrictMode>,
  document.getElementById("root")
);
