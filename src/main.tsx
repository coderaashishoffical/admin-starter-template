import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./styles/index.css";
// redux
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
// react-query
import { QueryProvider } from "./utils/react-query.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <App />
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);
