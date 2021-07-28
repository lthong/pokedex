import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { updateMyPokeIds } from '@/actions/pokemon';
import { redLoveIcon, whiteLoveIcon } from '@/assets/icons';

const SaveMyPokeBtn = ({ id: idValue }) => {
  const id = String(idValue);
  const dispatch = useDispatch();
  const myPokeIds = useSelector((state) => state.pokemon.myPokeIds);

  const onPokeSave = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(updateMyPokeIds(id));
    },
    [dispatch, id]
  );

  return (
    <img
      className={clsx('save-my-poke-btn', {
        active: myPokeIds.includes(id),
      })}
      alt='save-my-poke-btn'
      src={myPokeIds.includes(id) ? redLoveIcon : whiteLoveIcon}
      onClick={(event) => {
        onPokeSave(event, id);
      }}
    />
  );
};

export default SaveMyPokeBtn;
