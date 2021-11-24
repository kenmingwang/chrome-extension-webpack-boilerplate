import "../css/popup.css";
import App from "./popup/greeting_component.js";
import React from "react";
import { render } from "react-dom";

render(
  <App/>,
  window.document.getElementById("app-container")
);
