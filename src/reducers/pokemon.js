import * as cons from '@/constants/pokemon';
import { List, fromJS } from 'immutable';

const initState = {
  pokemonNames: List(),
  pokemonDetail: fromJS({
    basicInfo: {},
    species: {},
    abilities: {},
  }),
  myPokeIds: List(),
};

export default (state = initState, action) => {
  switch (action.type) {
    // case cons.GET_POKEMON_NAMES: {
    //   const pokemonNames = state.pokemonNames.concat(fromJS(action.payload));
    //   return {
    //     ...state,
    //     pokemonNames,
    //   };
    // }

    case cons.GET_POKEMON_DETAIL: {
      const pokemonDetail = fromJS(action.payload);
      return {
        ...state,
        pokemonDetail,
      };
    }

    case cons.UPDATE_MY_POKE_IDS: {
      return {
        ...state,
        myPokeIds: action.payload,
      };
    }

    default:
      return state;
  }
};
