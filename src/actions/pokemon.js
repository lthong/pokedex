import axios from 'axios';
import queryString from 'query-string';
import * as cons from '@/constants/pokemon';

export const getPokemonNames = (searchData, cb) => (dispatch) => {
  const query = queryString.stringify(searchData);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?${query}`)
    .then((response) => {
      const payload = response.data.results.map((item) => item.name);
      dispatch({ type: cons.GET_POKEMON_NAMES, payload });
    })
    .finally(() => {
      cb();
    });
};

export const getPokemonDetail = (name, cb) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      dispatch({ type: cons.GET_POKEMON_DETAIL, payload: response.data });
    })
    .finally(() => {
      cb();
    });
};
