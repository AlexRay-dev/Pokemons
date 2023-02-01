import React, {FC, useEffect, useState} from 'react';
import {fetchPokemons} from "../../core/store/actions-creators/pokemons";
import {useTypedDispatch, useTypedSelector} from "../../core/hooks/redux";
import {selectPokemons} from "../../core/store/reducers/pokemons-slice";
import {Box, Grid, Pagination, Typography} from "@mui/material";
import Loading from "../../components/loading";
import {POKEMONS_LIMIT} from "../../core/consts/config";
import {InitialPokemonList} from "../../core/types/pokemons";
import {API} from "../../core/consts/api";
import axios from "axios";
import PokemonsItem from "./pokemons-item";
import {useAction} from "../../core/hooks/use-action";

const Home: FC = () => {
  const {fetchPokemons} = useAction();
  const {pokemons, isLoading, error} = useTypedSelector(selectPokemons);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCounts, setTotalCounts] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const countResponse = await axios.get<InitialPokemonList>(`${API.URL}/pokemon`);
      setTotalCounts(countResponse.data.count);
    };
    fetchData();
  }, []);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage])

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <Box>
      <Pagination
        count={Math.ceil(totalCounts / POKEMONS_LIMIT)}
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

export default Home;