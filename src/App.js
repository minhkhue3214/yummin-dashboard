import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Footer, Navbar, Sidebar, ThemeSettings } from './components';
import { Customers, Home, Employees, Orders, Login } from './pages';

import { useUsersStore } from "./hooks/users";

const App = () => {
  // const { themeSettings } = useStateContext();
  const { usersState } = useUsersStore();

  return (
    <div className="Dark">
      <BrowserRouter>

        <div className="flex relative dark:bg-main-dark-bg">

          {usersState.activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              usersState.activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {/* {themeSettings && (<ThemeSettings />)} */}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />
                <Route path="/home" element={(<Home />)} />
                <Route path="/login" element={(<Login />)} />


                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
