import React, { FC, useContext, useEffect, useMemo } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';
import NavBar from './components/navbar/navigation-bar';
import Footer from './components/footer/footer';

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default observer(App);
