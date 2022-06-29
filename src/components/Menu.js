import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">
            Add Techno
          </NavLink>
        </li>
        <li>
          <NavLink to="/list">
            All Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
