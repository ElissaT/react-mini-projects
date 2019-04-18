import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles.css";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/counter" activeClassName="nav-link-active">
          Counter
        </NavLink>

        <NavLink exact to="/toggle" activeClassName="nav-link-active">
          Toggle
        </NavLink>

        <NavLink exact to="/font-sizer" activeClassName="nav-link-active">
          Font Sizer
        </NavLink>

        <NavLink exact to="/hide" activeClassName="nav-link-active">
          Show/Hide
        </NavLink>

        <NavLink exact to="/toggle-styles" activeClassName="nav-link-active">
          Toggle Styles
        </NavLink>

        <NavLink exact to="/clock" activeClassName="nav-link-active">
          Clock
        </NavLink>

        <NavLink exact to="/color-changer" activeClassName="nav-link-active">
          Color Changer
        </NavLink>
      </div>
    );
  }
}
