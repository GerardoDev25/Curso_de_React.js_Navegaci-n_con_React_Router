import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  }
);

export const Menu = () => {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}
        {/* <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
          >
            Profile
          </NavLink>
        </li> */}

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
