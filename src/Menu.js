import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [];
routes.push(
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/blog',
    text: 'Blog',
  },
  {
    to: '/profile',
    text: 'Profile',
  },
  {
    to: '/login',
    text: 'Login',
  },
  {
    to: '/logout',
    text: 'Logout',
  }
);

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ to, text }, index) => (
          <li key={index}>
            <NavLink
              to={to}
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
