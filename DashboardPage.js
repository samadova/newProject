import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const DashboardPage = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Панель управления</h2>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default DashboardPage;
