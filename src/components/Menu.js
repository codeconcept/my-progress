import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activelink" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activelink" : undefined)}
          >
            Add Techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activelink" : undefined)}
          >
            All Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
