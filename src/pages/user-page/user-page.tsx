import React, {FC, useEffect, useState} from 'react';
import {useAction} from "../../core/hooks/use-action";
import {Box, Typography} from "@mui/material";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectUserData} from "../../core/store/reducers/user-slice";
import USERS from "../../core/consts/users";
import PokemonList from "../../components/pokemons/pokemon-list";

const UserPage: FC = () => {
  const {fetchUserFavoritePokemons} = useAction();
  const {user,error,isLoading, favoritePokemons} = useTypedSelector(selectUserData)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentUser = USERS.find(currentUser => currentUser.login === user.name);

  const pokemonListProps = {
    currentPage,
    setCurrentPage,
    totalPokemonCount: favoritePokemons.length,
    pokemons: favoritePokemons,
    isLoading,
    error,
  }

  useEffect(() => {
    if (currentUser) {
      fetchUserFavoritePokemons(currentUser.favoritePokemonsIndices)
    }
  }, []);

  if (!currentUser) return null;

  return (
    <Box>
      <Typography variant="h2">Hello {user.name}</Typography>
      <PokemonList {...pokemonListProps}/>
    </Box>
  );
};

export default UserPage;