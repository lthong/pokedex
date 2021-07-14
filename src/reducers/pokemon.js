import * as cons from '@/constants/pokemon';
import { List, Map, fromJS } from 'immutable';

const initState = {
  pokemonNames: List(),
  pokemonDetail: Map(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case cons.GET_POKEMON_NAMES: {
      const pokemonNames = state.pokemonNames.concat(fromJS(action.payload));
      return {
        ...state,
        pokemonNames,
      };
    }

    case cons.GET_POKEMON_DETAIL: {
      const pokemonDetail = fromJS(action.payload);
      return {
        ...state,
        pokemonDetail,
      };
    }

    default:
      return state;
  }
};
