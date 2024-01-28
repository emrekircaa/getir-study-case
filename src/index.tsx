import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./lib/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
