import React from 'react';
import LoginForm from '../components/Auth/loginForm';
/* import AddTourForm from '../components/tours/AddTourForm'
import AddUserForm from '../components/users/AddUserForm'
import GetUser from '../components/users/GetUser'
import GetTour from '../components/tours/GetTour'
import AddBossForm from '../components/boss/AddBossForm' */

const Accueil = () => {
  return (
    <div>
      <h1 className="text-center mb-4">Bienvenue sur l'AppExpress</h1>
      <div className="flex justify-center">
{/*         <AddBossForm /> */}
        <LoginForm />
      </div>
{/*       <div className="flex justify-center">
        <AddTourForm />
        <AddUserForm />
      </div>
      <div className="flex justify-center">
        <GetTour />
        <GetUser />
      </div> */}
    </div>
  );
};

export default Accueil