import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={s.wrapper}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : "")}
        to={"/gateways"}
      >
        Gateways
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : "")}
        to={"/devices"}
      >
        Devices
      </NavLink>
    </div>
  );
}

export default Navigation;
