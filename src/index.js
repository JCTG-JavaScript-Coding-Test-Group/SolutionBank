import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot, atom } from "recoil";
import App from "./App";

export const solutionState = atom({
  key: "solutionState",
  default: {
    level: 1,
    fileName: "",
    solution: [],
  },
});

export const solutionNoState = atom({
  key: "solutionNoState",
  default: 0,
});

export const loadingState = atom({
  key: "loadingState",
  default: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
