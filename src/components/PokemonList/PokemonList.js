import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ImPropTypes from 'react-immutable-proptypes';
import CircularProgress from '@material-ui/core/CircularProgress';

const PokemonList = ({ getPokemonNames, pokemonNames }) => {
  const [loading, setLoading] = useState(false);

  const onGetMoreData = useCallback(() => {
    setLoading(true);
    const offset = pokemonNames.size;
    getPokemonNames({ offset, limit: 10 }, () => {
      setLoading(false);
    });
  }, [pokemonNames, getPokemonNames]);

  useEffect(() => {
    onGetMoreData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='pokedex-list'>
      <div className='content'>
        {pokemonNames.map((name, index) => {
          const id = index + 1;
          return (
            <div key={id} className='pokemon'>
              <div className='img-container'>
                <img
                  // src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={name}
                />
              </div>
              <div className='info'>
                <span className='number'>{id.toString().padStart(3, '0')}</span>
                <h3 className='name'>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      {loading && <CircularProgress />}
      <div className='more' onClick={onGetMoreData} disabled={loading}>
        More
      </div>
    </div>
  );
};

PokemonList.propTypes = {
  getPokemonNames: PropTypes.func,
  pokemonNames: ImPropTypes.list,
};

export default PokemonList;
