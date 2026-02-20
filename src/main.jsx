import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/custom.css";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);