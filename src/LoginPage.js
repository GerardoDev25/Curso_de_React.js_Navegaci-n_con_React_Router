import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const auth = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="name">Escribe tu nombre de ususario</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
