import Loadable from 'react-loadable';

const Loading = (props) => {
  if (props.pastDelay) {
    return '...Loading';
  } else {
    return null;
  }
};

export const PokemonList = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'PokemonList' */ '@/components/PokemonList'),
  loading: Loading,
});

export const PokemonDetailContainer = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'PokemonDetail' */ '@/containers/PokemonDetailContainer'
    ),
  loading: Loading,
});
