import React, {
  useEffect,
  useCallback,
  useState,
  useMemo,
  useRef,
} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImPropTypes from 'react-immutable-proptypes';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import queryStr from 'query-string';
import clsx from 'clsx';
import decimal from 'decimal.js';
import SaveMyPokeBtn from '@/components/SaveMyPokeBtn';
import { arrowIcon } from '@/assets/icons';
import routerPath from '@/libraries/routerPath';
import { POKEMON_MAX_AMOUNT } from '@/libraries/constants';

const languageEnum = {
  en: 'en',
  'zh-Hant': 'zh-TW',
};

const PokemonDetail = ({ getPokemonDetail, pokemonDetail }) => {
  const { t } = useTranslation();

  const location = useLocation();
  const history = useHistory();
  const { id } = queryStr.parse(location.search);

  const statesBarReadyTimerId = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isStatesBarReady, setIsStatesBarReady] = useState(false);

  const basicInfo = useMemo(() => pokemonDetail.get('basicInfo'), [
    pokemonDetail,
  ]);
  const species = useMemo(() => pokemonDetail.get('species'), [pokemonDetail]);
  const abilities = useMemo(() => pokemonDetail.get('abilities'), [
    pokemonDetail,
  ]);

  const name = useMemo(() => basicInfo.get('name'), [basicInfo]);
  const formatPokeId = useMemo(() => id.toString().padStart(3, '0'), [id]);
  const mainType = useMemo(
    () => basicInfo.getIn(['types', 0, 'type', 'name'], ''),
    [basicInfo]
  );

  const category = useMemo(
    () =>
      species
        .get('genera')
        ?.filter(
          (item) =>
            languageEnum[item.getIn(['language', 'name'])] === i18next.language
        )
        .getIn([0, 'genus'], ''),
    [species, i18next.language]
  );

  const desc = useMemo(
    () =>
      species
        .get('flavor_text_entries')
        ?.filter(
          (item) =>
            languageEnum[item.getIn(['language', 'name'])] === i18next.language
        )
        .getIn([0, 'flavor_text'], ''),
    [species, i18next.language]
  );

  const ability = useMemo(
    () =>
      abilities.size > 0
        ? {
            desc: abilities
              .get('desc', [])
              .filter(
                (item) =>
                  languageEnum[item.getIn(['language', 'name'])] ===
                  i18next.language
              )
              .getIn([0, 'flavor_text'], ''),
            label: abilities
              .get('label', [])
              .filter(
                (item) =>
                  languageEnum[item.getIn(['language', 'name'])] ===
                  i18next.language
              )
              .getIn([0, 'name'], ''),
          }
        : {},
    [abilities, i18next.language]
  );

  const states = useMemo(
    () =>
      basicInfo
        .get('stats')
        ?.map((item) => ({
          label: item.getIn(['stat', 'name']),
          value: item.get('base_stat'),
        }))
        .toJS(),
    [basicInfo]
  );

  const goToOtherPokeDetail = useCallback(
    (btnType) => {
      if (btnType === 'pre') {
        history.push(`${routerPath.DETAIL}?id=${Number(id) - 1}`);
      } else if (btnType === 'next') {
        history.push(`${routerPath.DETAIL}?id=${Number(id) + 1}`);
      }
    },
    [id, history]
  );

  const [prePokeDetailBtn, nextPokeDetailBtn] = useMemo(() => {
    const preBtnDisabled = Number(id) - 1 <= 0;
    const nextBtnDisabled = Number(id) + 1 > POKEMON_MAX_AMOUNT;
    return [
      <img
        key='prePokeDetailBtn'
        className={clsx('arrow-btn left', { disabled: preBtnDisabled })}
        src={arrowIcon}
        alt='arrow-icon'
        onClick={() => {
          !preBtnDisabled && goToOtherPokeDetail('pre');
        }}
      />,
      <img
        key='nextPokeDetailBtn'
        className={clsx('arrow-btn right', {
          disabled: nextBtnDisabled,
        })}
        src={arrowIcon}
        alt='arrow-icon'
        onClick={() => {
          !nextBtnDisabled && goToOtherPokeDetail('next');
        }}
      />,
    ];
  }, [id, goToOtherPokeDetail]);

  const getData = useCallback(() => {
    setLoading(true);
    setIsStatesBarReady(false);
    clearTimeout(statesBarReadyTimerId.current);

    getPokemonDetail({ id }, () => {
      setLoading(false);
      statesBarReadyTimerId.current = setTimeout(() => {
        setIsStatesBarReady(true);
      }, 600);
    });
  }, [getPokemonDetail, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    return () => {
      clearTimeout(statesBarReadyTimerId.current);
    };
  }, []);

  return (
    <div className='pokedex-detail'>
      {!loading && String(basicInfo.get('id')) === id ? (
        <>
          <div className='title'>
            <div className='name'>{t(`pokemonNames.${name}`)}</div>
            <div className='id'>{`#${formatPokeId}`}</div>
          </div>
          <div className={clsx('pokemon', { [mainType]: !!mainType })}>
            {prePokeDetailBtn}
            <div className='data-box'>
              <div className='block'>
                <SaveMyPokeBtn id={id} />
                <div className='img-container'>
                  <img
                    className='poke-photo'
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatPokeId}.png`}
                    alt={name}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-1-1'>
                  <div className='label'>{t('common.states')}</div>
                  <div className='content'>
                    {states?.map(({ label, value }, index) => {
                      const barWidth = decimal
                        .div(value, 300)
                        .mul(100)
                        .toNumber();

                      return (
                        <div key={`state-${index}`} className='state'>
                          <div className='label'>{t(`common.${label}`)}</div>
                          <div className='value'>
                            <div
                              className={clsx('bar', {
                                full: barWidth === 100,
                              })}
                              style={
                                isStatesBarReady
                                  ? {
                                      width: `${barWidth}%`,
                                    }
                                  : {}
                              }
                            />
                            <span>{`${value} / 300`}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='data-box'>
              <div className='row'>
                <div className='col-1-2'>
                  <div className='label'>{t('common.height')}</div>
                  <div className='content'>
                    {`${decimal
                      .div(basicInfo.get('height', 0), 10)
                      .toNumber()} m`}
                  </div>
                </div>
                <div className='col-1-2'>
                  <div className='label'>{t('common.weight')}</div>
                  <div className='content'>
                    {`${decimal
                      .div(basicInfo.get('weight', 0), 10)
                      .toNumber()} kg`}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-1-1'>
                  <div className='label'>{t('common.types')}</div>
                  <div className='content'>
                    {basicInfo.get('types')?.map((item) => {
                      const type = item.getIn(['type', 'name']);
                      return (
                        <div
                          key={type}
                          className={clsx('type', { [type]: true })}
                        >
                          {t(`common.${type}`)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-1-1'>
                  <div className='label'>{t('common.category')}</div>
                  <div className='content'>{category}</div>
                  <div className='content desc'>{desc}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-1-1'>
                  <div className='label'>{t('common.ability')}</div>
                  <div className='content'>{ability.label}</div>
                  <div className='content desc'>{ability.desc}</div>
                </div>
              </div>
            </div>
            {nextPokeDetailBtn}
          </div>
        </>
      ) : (
        <div className='pokemon'>{t('common.loading')}</div>
      )}
    </div>
  );
};

PokemonDetail.propTypes = {
  getPokemonDetail: PropTypes.func,
  pokemonDet: ImPropTypes.map,
};

export default PokemonDetail;
