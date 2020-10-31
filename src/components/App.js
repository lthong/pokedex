import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PokemonListContainer } from '@/containers';
import '@/stylesheet/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={PokemonListContainer} />
    </BrowserRouter>
  );
};

export default App;
