import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PokemonList, PokemonDetailContainer } from '@/components/Loadable';
import NavBar from '@/components/NavBar';
import routerPath from '@/libraries/routerPath';
import '@/stylesheet/app.scss';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <NavBar />
      <Route exact path={routerPath.ROOT}>
        <PokemonList />
      </Route>
      <Route path={routerPath.DETAIL}>
        <PokemonDetailContainer />
      </Route>
    </BrowserRouter>
  );
};

export default App;
