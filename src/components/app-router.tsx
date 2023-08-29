import { Route, Routes } from 'react-router-dom'
import Catalogue from './catalogue-screen/catalogue-screen';
import LoginScreen from './auth/login-screen';
import MainScreen from './main-screen/main-screen';
import { FC } from 'react';
import TestScreen from './test-screen';

import MainScreen2 from './neo-design/main-screen/main.screen';

import CatalogueScreen from './neo-design/catalogue-screen/catalogue.screen'

const AppRouter: FC = () => {
  return (
    <Routes>
        <Route element={<Catalogue />} path='/catalogue'/>
        <Route element={<MainScreen />} path='/'/>
        <Route element={<LoginScreen />} path='/login' />
        <Route element={<CatalogueScreen />} path='/testcatalogue' />

        <Route element={<MainScreen2 />} path='/mainneo' />



        <Route path='*' element={<MainScreen />} />
    </Routes>
  )
}

export default AppRouter;
