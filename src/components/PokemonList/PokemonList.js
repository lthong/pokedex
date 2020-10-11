import React, { useEffect } from 'react';

const initIds = Array(20).fill(null);

const PokemonList = ({ getPokemonById, pokemons }) => {
  useEffect(() => {
    initIds.forEach((_, id) => {
      getPokemonById(id + 1);
    });
  }, []);

  return (
    <div className='pokedex-list'>
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
  );
};

export default PokemonList;
