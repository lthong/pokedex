import * as cons from 'constants/pokemon';
import Im from 'immutable';

const initState = {
  pokemons: Im.List(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case cons.GET_POKEMONS:
      const pokemons = state.pokemons.push(Im.fromJS(action.payload));

      return {
        ...state,
        pokemons,
      };
    default:
      return state;
  }
};
