import { connect } from 'react-redux';
import { getPokemonById } from 'actions/pokemon';
import PokemonList from 'components/PokemonList';

const PokemonListContainer = connect(
  (state) => ({
    pokemons: state.pokemon.pokemons,
  }),
  { getPokemonById }
)(PokemonList);

export default PokemonListContainer;
