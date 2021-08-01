export const POKEMON_MAX_AMOUNT = 151;

export const publicPath = location.pathname.includes('/pokedex')
  ? location.pathname
  : '/';
