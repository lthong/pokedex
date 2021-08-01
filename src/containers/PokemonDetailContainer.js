import { connect } from 'react-redux';
import { getPokemonDetail } from '@/actions/pokemon';
import PokemonDetail from '@/components/PokemonDetail';

const PokemonDetailContainer = connect(
  (state) => ({
    pokemonDetail: state.pokemon.pokemonDetail,
  }),
  { getPokemonDetail }
)(PokemonDetail);

export default PokemonDetailContainer;
