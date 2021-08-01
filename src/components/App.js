import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PokemonListContainer, PokemonDetailContainer } from '@/containers';
import NavBar from '@/components/NavBar';
import routerPath from '@/libraries/routerPath';
import '@/stylesheet/app.scss';

const App = () => {
  return (
    <BrowserRouter basename={location.pathname}>
      <NavBar />
      <Route exact path={routerPath.ROOT}>
        <PokemonListContainer />
      </Route>
      <Route exact path={routerPath.DETAIL}>
        <PokemonDetailContainer />
      </Route>
    </BrowserRouter>
  );
};

export default App;
