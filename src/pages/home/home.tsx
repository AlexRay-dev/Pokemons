import React, {FC} from 'react';
import PokemonList from "../../components/pokemons/pokemon-list";
import {Box} from "@mui/material";

const Home: FC = () => {
  return (
    <Box>
      <PokemonList/>
    </Box>
  );
};

export default Home;