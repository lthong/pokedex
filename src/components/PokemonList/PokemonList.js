import React, { useEffect, useMemo, useCallback } from 'react';

const PokemonList = ({ getPokemonById, pokemons }) => {
  const total = useMemo(() => pokemons.size || 0, [pokemons]);
  useEffect(() => {
    const getData = async () => {
      for (let id = 1; id <= 20; id++) {
        await getPokemonById(id);
      }
    };
    getData();
  }, []);

  const onGetMoreData = useCallback(() => {
    const getData = async () => {
      for (let id = total + 1; id <= total + 10; id++) {
        await getPokemonById(id);
      }
    };
    getData();
  }, [total, getPokemonById]);

  return (
    <div className='pokedex-list'>
      <div className='content'>
        {pokemons.map((data) => {
          const id = data.get('id');
          const name = data.get('name');
          const type = data.getIn(['types', 0, 'type', 'name'], '');
          return (
            <div key={id} className={`pokemon ${type}`}>
              <div className='img-container'>
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                  alt={name}
                />
              </div>
              <div className='info'>
                <span className='number'>{id.toString().padStart(3, '0')}</span>
                <h3 className='name'>{name}</h3>
                <small className='type'>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          );
        })}
      </div>
      {/* TODO: handle double click */}
      <div className='more' onClick={onGetMoreData}>
        More
      </div>
    </div>
  );
};

export default PokemonList;
