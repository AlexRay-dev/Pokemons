import React, {FC} from 'react';
import {Grid} from "@mui/material";
import PokemonsItem from "./pokemons-item";
import {DetailedPokemon} from "../../core/types/pokemons";

interface IPokemonListProps {
  pokemons: DetailedPokemon[],
}

const PokemonList: FC<IPokemonListProps> = React.memo(({pokemons}) => {
  return (
    <Grid container spacing={3} padding="15px 0 30px">
      {pokemons.map(pokemon => (
        <PokemonsItem key={pokemon.id} pokemon={pokemon}/>
      ))}
    </Grid>
  );
});

export default PokemonList;