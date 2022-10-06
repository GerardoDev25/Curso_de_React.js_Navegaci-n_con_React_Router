import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

const routes = [];
routes.push(
  {
    to: '/',
    text: 'Home',
    private: false,
  },
  {
    to: '/blog',
    text: 'Blog',
    private: false,
  },
  {
    to: '/profile',
    text: 'Profile',
    private: true,
  },
  {
    to: '/login',
    text: 'Login',
    publicOnly: true,
    private: false,
  },
  {
    to: '/logout',
    text: 'Logout',
    private: true,
  }
);

export const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map(({ to, text, private: isPrivate, publicOnly }, index) => {
          if (publicOnly && auth.user) return null;
          if (isPrivate && !auth.user) return null;
          return (
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
          );
        })}
      </ul>
    </nav>
  );
};
