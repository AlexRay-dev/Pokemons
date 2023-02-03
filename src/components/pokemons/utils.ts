import axios from "axios";
import {DetailedPokemon, InitialPokemonList} from "../../core/types/pokemons";
import {API} from "../../core/consts/api";
import {Dispatch, SetStateAction} from "react";
import {DEFAULT_POKEMON_TYPE_FILTER} from "../../core/consts/config";

export const fetchAllPokemonsCount = async (setTotalCounts: Dispatch<SetStateAction<number>>) => {
  const pokemonsCount = await axios.get<InitialPokemonList>(`${API.URL}/pokemon`);
  setTotalCounts(pokemonsCount.data.count);
};

export const getPokemonTypes = (pokemon: DetailedPokemon) => {
  return pokemon.types.map((item) => item.type.name).join(', ');
};

export const getFilteredPokemons = (selectedType: string, pokemons: DetailedPokemon[]): DetailedPokemon[] => {
  if (selectedType === DEFAULT_POKEMON_TYPE_FILTER) {
    return pokemons;
  }
  return pokemons.filter((pokemon) =>
    pokemon.types.some(({type}) => type.name === selectedType)
  );
}