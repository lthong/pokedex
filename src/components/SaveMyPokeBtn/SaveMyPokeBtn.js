import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { updateMyPokeIds } from '@/actions/pokemon';
import { redLoveIcon, whiteLoveIcon } from '@/assets/icons';

const SaveMyPokeBtn = ({ id: idValue }) => {
  const id = String(idValue);
  const dispatch = useDispatch();
  const myPokeIds = useSelector((state) => state.pokemon.myPokeIds);
  const className = useMemo(
    () =>
      clsx('save-my-poke-btn', {
        active: myPokeIds.includes(id),
      }),
    [id, myPokeIds]
  );
  const iconPath = useMemo(
    () => (myPokeIds.includes(id) ? redLoveIcon : whiteLoveIcon),
    [id, myPokeIds]
  );
  const onPokeSave = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(updateMyPokeIds(id));
    },
    [dispatch, id]
  );

  return (
    <img
      className={className}
      alt='save-my-poke-btn'
      src={iconPath}
      onClick={(event) => {
        onPokeSave(event, id);
      }}
    />
  );
};

export default SaveMyPokeBtn;
