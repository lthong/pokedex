import React from 'react';
import Loadable from 'react-loadable';

const Loading = (props) => {
  if (props.pastDelay) {
    return '...Loading';
  } else {
    return null;
  }
};

export const PokemonListContainer = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'PokemonList' */ '@/containers/PokemonListContainer'
    ),
  loading: Loading,
});

export const PokemonDetailContainer = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'PokemonDetail' */ '@/containers/PokemonDetailContainer'
    ),
  loading: Loading,
});
