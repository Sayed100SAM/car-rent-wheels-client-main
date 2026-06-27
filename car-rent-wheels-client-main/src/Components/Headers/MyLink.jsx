import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, className, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-secondary font-semibold text-base hover:text-primary"
            : `hover:text-primary text-base ${className}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default MyLink;
