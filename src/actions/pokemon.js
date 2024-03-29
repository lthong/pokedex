import axios from 'axios';
import queryString from 'query-string';
import * as cons from '@/constants/pokemon';

// export const getPokemonNames = (searchData, cb) => (dispatch) => {
//   const query = queryString.stringify(searchData);
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon?${query}`)
//     .then((response) => {
//       const payload = response.data.results.map((item, id) => ({
//         name: item.name,
//         id: id + 1,
//       }));
//       dispatch({ type: cons.GET_POKEMON_NAMES, payload });
//     })
//     .finally(() => {
//       cb();
//     });
// };

// https://github.com/learning-zone/react-basics#q-how-to-make-ajax-request-in-redux
// When using Redux Thunk, your action creators returns a function that takes one argument dispatch:

// function getUserName(userId) {
//   return dispatch => {
//       return fetch(`/api/personalDetails/${userId}`)
//       .then(response => response.json())
//       .then(json => dispatch({ type: "SET_USERNAME", userName: json.userName })
//   }
// }

// The action creator can call dispatch inside .then to execute it asynchronously.
// The action creator can call dispatch as many time as it wants.

export const getPokemonDetail =
  ({ id }, cb) =>
  (dispatch) => {
    Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
    ])
      .then((response) => {
        const basicInfo = response[0]?.data || {};
        const species = response[1]?.data || {};
        const abilityUrl = basicInfo?.abilities[0]?.ability?.url;
        axios
          .get(abilityUrl)
          .then(({ data: { names: label, flavor_text_entries: desc } }) => {
            dispatch({
              type: cons.GET_POKEMON_DETAIL,
              payload: {
                basicInfo,
                species,
                abilities: { label, desc },
              },
            });
          });
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
