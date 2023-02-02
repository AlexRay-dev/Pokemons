import React, {FC, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {fetchAllPokemonsCount} from "../../components/pokemons/utils";
import {useAction} from "../../core/hooks/use-action";
import PokemonList from "../../components/pokemons/pokemon-list";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectPokemons} from "../../core/store/reducers/pokemons-slice";

const Home: FC = () => {
  const {fetchPokemons} = useAction();
  const {pokemons, isLoading, error} = useTypedSelector(selectPokemons);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPokemonCount, setTotalPokemonCount] = useState<number>(1);
  const pokemonListProps = {
    currentPage,
    setCurrentPage,
    totalPokemonCount,
    pokemons,
    isLoading,
    error,
  }

  useEffect(() => {
    fetchAllPokemonsCount(setTotalPokemonCount);
  }, []);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage])

  return (
    <Box>
      <PokemonList {...pokemonListProps}/>
    </Box>
  );
};

export default Home;