import * as cons from '@/constants/pokemon';
import Im from 'immutable';

const initState = {
  pokemonNames: Im.List(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case cons.GET_POKEMON_NAMES:
      const pokemonNames = state.pokemonNames.concat(Im.fromJS(action.payload));

      return {
        ...state,
        pokemonNames,
      };
    default:
      return state;
  }
};
