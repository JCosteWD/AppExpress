// AuthSidebar.js
import React from 'react';
import Sidebar from "../../dashboard/scenes/global/Sidebar";

const AuthSidebar = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated && <Sidebar />}
    </div>
  );
};

export default AuthSidebar;
