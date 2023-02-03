import React, {FC, useEffect, useState} from 'react';
import {useAction} from "../../core/hooks/use-action";
import {Box, FormControl, MenuItem, Select, Typography} from "@mui/material";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectUserData} from "../../core/store/reducers/user-slice";
import {selectFavoritePokemons} from "../../core/store/reducers/favorite-pokemons-slice";
import CustomPagination from "../../components/pagination/custom-pagination";
import Loading from "../../components/loading/loading";
import FavoritePokemonsList from "../../components/pokemons/favorite-pokemons-list";
import {getCurrentPokemonTypes} from "../../core/utils/utils";
import {DEFAULT_POKEMON_TYPE_FILTER} from "../../core/consts/config";
import {getFilteredPokemons} from "../../components/pokemons/utils";

const UserPage: FC = React.memo(() => {
  const {fetchUserFavoritePokemons} = useAction();
  const {currentUser} = useTypedSelector(selectUserData);
  const {error, isLoading, favoritePokemons} = useTypedSelector(selectFavoritePokemons);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedType, setSelectedType] = useState(DEFAULT_POKEMON_TYPE_FILTER);
  const [filteredPokemons, setFilteredPokemons] = useState(favoritePokemons);
  const paginationProps = {currentPage, setCurrentPage, totalPokemonCount: filteredPokemons.length};
  const [currentTypes, setCurrentTypes] = useState<string[]>([]);

  useEffect(() => {
    if (favoritePokemons.length) setCurrentTypes(getCurrentPokemonTypes(favoritePokemons));
  }, [favoritePokemons]);

  useEffect(() => {
    if (currentUser) {
      fetchUserFavoritePokemons(currentUser.favoritePokemonsIndices)
    }
  }, []);

  useEffect(() => {
    setFilteredPokemons(getFilteredPokemons(selectedType, favoritePokemons));
  }, [selectedType, favoritePokemons]);

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <Box>
      <Typography variant="h2">Hello {currentUser.name}</Typography>
      <CustomPagination {...paginationProps}/>

      <FormControl fullWidth size="small" sx={{mt: ".6rem"}}>
        <Typography variant="h6" mb=".1rem">Filter by pokemon type</Typography>

        <Select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <MenuItem key="all" value={DEFAULT_POKEMON_TYPE_FILTER}>{DEFAULT_POKEMON_TYPE_FILTER}</MenuItem>
          {currentTypes.map(type => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {isLoading
        ? <Loading/>
        : <FavoritePokemonsList pokemons={filteredPokemons} currentPage={currentPage}/>
      }
    </Box>
  );
});

export default UserPage;

