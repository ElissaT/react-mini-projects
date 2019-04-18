import React from "react";
import ReactDOM from "react-dom";

import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import FontSizer from "./components/FontSizer";
import ShowHide from "./components/ShowHide";
import ToggleStyles from "./components/ToggleStyles";
import ChangeColor from "./components/ChangeColor";
import Clock from "./components/Clock";
import NavigationComponent from "./components/NavBar";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <h1>Click on the project you would like to view</h1>
        <NavigationComponent />
        <div>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/toggle" component={Toggle} />
            <Route path="/font-sizer" component={FontSizer} />
            <Route path="/hide" component={ShowHide} />
            <Route path="/toggle-styles" component={ToggleStyles} />
            <Route path="/clock" component={Clock} />
            <Route path="/color-changer" component={ChangeColor} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
