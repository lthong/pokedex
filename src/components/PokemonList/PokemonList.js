import React, { useCallback, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SaveMyPokeBtn from '@/components/SaveMyPokeBtn';
import routerPath from '@/libraries/routerPath';
import { searchIcon } from '@/assets/icons';
import { pokemonNames, pokeTypes, pokeTypeData } from '@/resource/pokemonData';
import PokemonType from '../PokemonType';
import clsx from 'clsx';

const PokemonList = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchType, setSearchType] = useState('');

  const pokeData = useMemo(() => {
    const keyword = searchKeyword.toLowerCase();
    if (searchType) {
      const data = pokeTypeData[searchType];
      if (keyword) {
        return data.filter(
          (item) =>
            item.name.includes(keyword) ||
            String(item.id).includes(keyword) ||
            t(`pokemonNames.${item.name}`).includes(keyword)
        );
      }
      return data;
    }
    if (keyword) {
      return pokemonNames.filter(
        (item) =>
          item.name.includes(keyword) ||
          String(item.id).includes(keyword) ||
          t(`pokemonNames.${item.name}`).includes(keyword)
      );
    }
    return pokemonNames;
  }, [searchKeyword, searchType, t]);

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

  const onTypeChange = useCallback((type) => {
    setSearchType(type);
  }, []);

  const onReset = useCallback(() => {
    setSearchKeyword('');
    setSearchType('');
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
        <div className='reset-btn' onClick={onReset}>
          {t('common.reset')}
        </div>
        <div className='poke-types'>
          {pokeTypes.map((type) => (
            <PokemonType
              key={type}
              type={type}
              className={clsx({ active: type === searchType })}
              onClick={() => {
                onTypeChange(type === searchType ? '' : type);
              }}
            />
          ))}
        </div>
      </div>
      <div className='content'>
        {pokeData.map(({ name, id, types }) => {
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
              <div className='types'>
                {types.map((type) => (
                  <PokemonType key={type} type={type} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
