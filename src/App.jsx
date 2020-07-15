import React from "react";
import "./App.scss";

import Logo from "./logo.svg";

export const App = () => (
  <React.Fragment>
    <div className="container">
      <div>
        <h1>Hello React Developers!</h1>
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
        </div>
        <p className="bottom">
          Prepaired by&nbsp;{" "}
          <span>
            <a href="https://github.com/junaid-pak/">Junaid</a>
          </span>
        </p>
      </div>
    </div>
  </React.Fragment>
);
