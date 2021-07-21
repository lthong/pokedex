import axios from 'axios';
import queryString from 'query-string';
import * as cons from '@/constants/pokemon';

export const getPokemonNames = (searchData, cb) => (dispatch) => {
  const query = queryString.stringify(searchData);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?${query}`)
    .then((response) => {
      const payload = response.data.results.map((item, id) => ({
        name: item.name,
        id: id + 1,
      }));
      dispatch({ type: cons.GET_POKEMON_NAMES, payload });
    })
    .finally(() => {
      cb();
    });
};

export const getPokemonDetail = ({ name, id }, cb) => (dispatch) => {
  Promise.all([
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
    axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`),
  ])
    .then((response) => {
      const payload = {
        basicInfo: response[0]?.data || {},
        species: response[1]?.data || {},
        evolution: response[2]?.data || {},
      };
      dispatch({ type: cons.GET_POKEMON_DETAIL, payload });
    })
    .finally(() => {
      cb();
    });
};

export const updateMyPokeIds = (id) => (dispatch, getState) => {
  const { myPokeIds: preState } = getState().pokemon;
  const payload = preState.includes(id)
    ? preState.filter((item) => item !== id)
    : preState.push(id);

  dispatch({
    type: cons.UPDATE_MY_POKE_IDS,
    payload,
  });
};
