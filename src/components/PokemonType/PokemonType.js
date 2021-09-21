import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const PokemonType = ({ className, type, onClick }) => {
  const { t } = useTranslation();

  return (
    <div
      key={type}
      className={clsx('pokemon-type', {
        [className]: !!className,
        [type]: true,
      })}
      onClick={onClick}
    >
      {t(`common.${type}`)}
    </div>
  );
};

export default PokemonType;
