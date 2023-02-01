import React, {FC, useEffect} from 'react';
import {fetchPokemons} from "../../core/store/actions-creators/pokemons";
import {useTypedDispatch, useTypedSelector} from "../../core/hooks/redux";
import {selectPokemons} from "../../core/store/reducers/pokemons-slice";
import {Box,Grid, Typography} from "@mui/material";
import PokemonsItem from "./pokemons-item";
import Loading from "../../components/loading";

const Home: FC = () => {
  const dispatch = useTypedDispatch();
  const {pokemons, isLoading, error} = useTypedSelector(selectPokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [])

  return (
    <Box>
      {isLoading && <Loading/>}
      <Grid container spacing={3}>
        {pokemons.map(pokemon =>
          <PokemonsItem key={pokemon.id} pokemon={pokemon}/>
        )}
      </Grid>
      {error && <Typography variant="body1">{error}</Typography>}
    </Box>
  );
};

export default Home;