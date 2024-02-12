import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./lib/GlobalStyle";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import "styled-components";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
