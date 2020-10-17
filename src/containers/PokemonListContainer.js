import { connect } from 'react-redux';
import { getPokemonNames } from '@/actions/pokemon';
import PokemonList from '@/components/PokemonList';

const PokemonListContainer = connect(
  (state) => ({
    pokemonNames: state.pokemon.pokemonNames,
  }),
  { getPokemonNames }
)(PokemonList);

export default PokemonListContainer;
