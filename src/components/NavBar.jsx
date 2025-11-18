 /* NavBar.jsx */
import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const navItems = ["Home", "Gallery", "About", "Story", "Contact"];

export default function NavBar() {
  return (
    <nav className="bg-olive sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <ul className="flex items-center space-x-8 py-4">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`;
            return (
              <li key={item}>
                <NavLink
                  to={path}
                  end={item === "Home"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
          <li className="ml-auto">
            <NavLink
              to="/cart"
              className="text-gray-600 hover:text-blue-500"
              aria-label="Shopping Cart"
            >
              <FaShoppingCart size={24} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
