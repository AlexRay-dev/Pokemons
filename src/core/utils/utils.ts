import {DetailedPokemon} from "../types/pokemons";

export const getCurrentPokemonTypes = (pokemons: DetailedPokemon[]): string[] => {
  const allPokemonTypes: string[] = [];
  pokemons.forEach(pokemon => {
    pokemon.types.forEach(({type}) => {
      if (!allPokemonTypes.includes(type.name)) {
        allPokemonTypes.push(type.name);
      }
    });
  });
  return allPokemonTypes;
}