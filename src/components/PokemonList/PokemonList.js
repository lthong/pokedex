import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ImPropTypes from 'react-immutable-proptypes';
import Button from '@material-ui/core/Button';

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
                  src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
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
      {loading && '...Loading'}
      <Button
        className='more'
        variant='contained'
        onClick={onGetMoreData}
        disabled={loading}
      >
        More
      </Button>
    </div>
  );
};

PokemonList.propTypes = {
  getPokemonNames: PropTypes.func,
  pokemonNames: ImPropTypes.list,
};

export default PokemonList;
