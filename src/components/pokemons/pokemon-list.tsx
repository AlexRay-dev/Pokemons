import React, {Dispatch, FC, SetStateAction} from 'react';
import {Box, Grid, Pagination, Typography} from "@mui/material";
import Loading from "../../components/loading";
import {POKEMONS_LIMIT} from "../../core/consts/config";
import PokemonsItem from "./pokemons-item";
import {DetailedPokemon} from "../../core/types/pokemons";

interface IPokemonListProps {
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  totalPokemonCount: number,
  pokemons: DetailedPokemon[],
  isLoading: boolean,
  error: string,
}

const PokemonList: FC<IPokemonListProps> = ({totalPokemonCount, setCurrentPage, currentPage, pokemons,isLoading,error}) => {

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <Box>
      <Pagination
        count={Math.ceil(totalPokemonCount / POKEMONS_LIMIT)}
        sx={{m: '10px 0'}}
        page={currentPage}
        onChange={(event, value) => {
          setCurrentPage(value);
        }}/>

      {isLoading
        ? <Loading/>
        : <Grid container spacing={3} padding="15px 0 30px">
          {pokemons.map(pokemon => (
            <PokemonsItem key={pokemon.id} pokemon={pokemon}/>
          ))}
        </Grid>
      }
    </Box>
  );
};

export default PokemonList;