import * as cons from 'constants/pokemon';
import Im from 'immutable';

const initState = {
  pokemons: Im.List(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case cons.GET_POKEMONS:
      const pokemons = state.pokemons
        .push(Im.fromJS(action.payload))
        // TODO: rm
        .sort(
          (data1, data2) => Number(data1.get('id')) - Number(data2.get('id'))
        );
      return {
        ...state,
        pokemons,
      };
    default:
      return state;
  }
};
