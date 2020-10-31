import React from 'react';
import Loadable from 'react-loadable';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = (props) => {
  if (props.pastDelay) {
    return <CircularProgress />;
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
