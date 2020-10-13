import axios from 'axios';
import * as cons from 'constants/pokemon';

export const getPokemonById = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        const { data: payload } = response;
        dispatch({ type: cons.GET_POKEMONS, payload });
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
