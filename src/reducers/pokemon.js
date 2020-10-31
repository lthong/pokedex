import * as cons from '@/constants/pokemon';
import { List, fromJS } from 'immutable';

const initState = {
  pokemonNames: List(),
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
    default:
      return state;
  }
};
