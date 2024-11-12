import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginLayout from './component/login-layout/LoginLayout';
import Login from "./pages/login/Login"
const App = () => {
  return (
  //  <Login/>
    <Routes>
        <Route
          path="/*"
          element={
            <LoginLayout>
              <Routes>
                <Route path="/" element={<Login/>} />
              </Routes>
            </LoginLayout>
          }
        />
      </Routes>
  
  );
};

export default App;
