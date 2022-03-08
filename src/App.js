import "./App.css";
import React from "react";
import LoginView from "./views/loginView";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";

import authContextState from "./state/authContextState";
/**
 * Main React App.
 * Leave App with Recoil
 */

export default function App() {
  const authContext = useRecoilValue(authContextState);
  console.log({ authContext });

  return (
    <RecoilRoot>
      <div className="app">
        <div className="appBanner">Learn Recoil - Time Sheet Project</div>
        <div className="appContent">
          <Routes>
            <Route exact path="/login" element={<LoginView />} />
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  );
}
