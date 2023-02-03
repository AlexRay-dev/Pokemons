import React, {FC} from 'react';
import {DetailedPokemon} from "../../core/types/pokemons";
import PokemonsItem from "./pokemons-item";
import {Grid} from "@mui/material";

interface FavoritePokemonsListProps {
  pokemons: DetailedPokemon[],
  currentPage: number,
}

const FavoritePokemonsList: FC<FavoritePokemonsListProps> = ({pokemons, currentPage}) => {
  return (
    <Grid container spacing={3} padding="15px 0 30px">
      {pokemons
        .slice((currentPage - 1) * 10, currentPage * 10)
        .map(pokemon => (
          <PokemonsItem key={pokemon.id} pokemon={pokemon}/>
        ))}
    </Grid>
  );
};

export default FavoritePokemonsList;