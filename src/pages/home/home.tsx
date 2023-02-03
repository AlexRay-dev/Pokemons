import React, {FC, useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {fetchAllPokemonsCount} from "../../components/pokemons/utils";
import {useAction} from "../../core/hooks/use-action";
import PokemonList from "../../components/pokemons/pokemon-list";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectPokemons} from "../../core/store/reducers/pokemons-slice";
import CustomPagination from "../../components/pagination/custom-pagination";
import Loading from "../../components/loading/loading";

const Home: FC = () => {
    const {fetchPokemons} = useAction();
    const {pokemons, isLoading, error} = useTypedSelector(selectPokemons);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPokemonCount, setTotalPokemonCount] = useState<number>(1);
    const paginationProps = {currentPage, setCurrentPage, totalPokemonCount};

    useEffect(() => {
      fetchAllPokemonsCount(setTotalPokemonCount);
    }, []);

    useEffect(() => {
      fetchPokemons(currentPage);
    }, [currentPage]);

    if (error) return <Typography variant='h4'>{error}</Typography>;

    return (
      <Box>
        <CustomPagination {...paginationProps}/>
        {isLoading
          ? <Loading/>
          : <PokemonList pokemons={pokemons}/>
        }
      </Box>
    );
  }
;

export default Home;