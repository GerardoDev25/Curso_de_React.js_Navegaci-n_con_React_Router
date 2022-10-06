import React from 'react';
import { useAuth } from './auth';

export const LogoutPage = () => {
  const auth = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout()
  };

  return (
    <>
      <h1>Logotu</h1>
      <form onSubmit={handleLogout}>
        <label htmlFor="name">are you sure that you want to left</label>
        <button type="submit">Left</button>
      </form>
    </>
  );
};
