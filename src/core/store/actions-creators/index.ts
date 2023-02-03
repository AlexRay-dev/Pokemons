import * as pokemonsActionCreators from './all-pokemons';
import * as userFavoritepokemonsActionCreators from './user-favorite-pokemons';

export default {
  ...pokemonsActionCreators,
  ...userFavoritepokemonsActionCreators,
};