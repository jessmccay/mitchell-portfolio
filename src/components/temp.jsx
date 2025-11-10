    // src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "Gallery", "About", "Mitchell's Story", "Contact"];

export default function NavBar() {
  return (
    <nav aria-label="Primary" className="nav-bar">
      <ul>
        {navItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`;
          return (
            <li key={item}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                tabIndex={0}
                aria-current="page"
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
