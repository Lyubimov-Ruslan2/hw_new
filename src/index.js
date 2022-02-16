import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./components/App";
import "./index.css";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
