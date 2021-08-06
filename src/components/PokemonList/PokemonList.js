import React, { useCallback, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SaveMyPokeBtn from '@/components/SaveMyPokeBtn';
import routerPath from '@/libraries/routerPath';
// import { POKEMON_MAX_AMOUNT } from '@/libraries/constants';
import { searchIcon } from '@/assets/icons';
import pokemonNames from '@/resource/pokemonData';

const PokemonList = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  const pokeData = useMemo(() => {
    const keyword = searchKeyword.toLowerCase();
    return keyword
      ? pokemonNames.filter(
          (item) =>
            item.get('name').includes(keyword) ||
            String(item.get('id')).includes(keyword) ||
            t(`pokemonNames.${item.get('name')}`).includes(keyword)
        )
      : pokemonNames;
  }, [searchKeyword, t]);

  const onCardClick = useCallback(
    ({ id }) => {
      history.push(`${routerPath.DETAIL}?id=${id}`);
    },
    [history]
  );

  const onSearchValueChange = useCallback((event) => {
    const { value } = event.target;
    setSearchKeyword(value);
  }, []);

  return (
    <div className='pokedex-list'>
      <div className='search-field'>
        <label htmlFor='keyword'>
          <img src={searchIcon} alt='search-icon' />
        </label>
        <input
          id='keyword'
          className='keyword-input'
          value={searchKeyword}
          onChange={onSearchValueChange}
          placeholder={t('common.search_placeholder')}
        />
      </div>
      <div className='content'>
        {pokeData.map((item) => {
          const { name, id } = item.toJS();
          return (
            <div
              key={id}
              className='pokemon'
              onClick={() => {
                onCardClick({ id, name });
              }}
            >
              <div className='img-container'>
                <img
                  // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
                    .toString()
                    .padStart(3, '0')}.png`}
                  alt={name}
                />
              </div>
              <div className='info'>
                <SaveMyPokeBtn id={id} />
                <span className='number'>{id.toString().padStart(3, '0')}</span>
                <h3 className='name'>{t(`pokemonNames.${name}`)}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
