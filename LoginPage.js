import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp, signIn } from './auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      history.push('/dashboard'); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
