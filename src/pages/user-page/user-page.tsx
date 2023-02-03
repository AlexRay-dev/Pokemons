import React, {FC, useEffect, useRef, useState} from 'react';
import {useAction} from "../../core/hooks/use-action";
import {Box,Typography} from "@mui/material";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectUserData} from "../../core/store/reducers/user-slice";
import {selectFavoritePokemons} from "../../core/store/reducers/favorite-pokemons-slice";
import CustomPagination from "../../components/pagination/custom-pagination";
import Loading from "../../components/loading/loading";
import FavoritePokemonsList from "../../components/pokemons/favorite-pokemons-list";
import {DEFAULT_POKEMON_TYPE_FILTER} from "../../core/consts/config";
import {getCurrentPokemonTypes, getFilteredPokemons} from "../../components/pokemons/utils";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import Chart from "../../components/chart/chart";
import {getHighchartsOptions} from "../../components/chart/utils";
import {selectAuth} from "../../core/store/reducers/auth-slice";
import {NavLink} from "react-router-dom";
import PokemonTypeFilter from "../../components/pokemons/pokemon-type-filter";

const UserPage: FC = React.memo(() => {
  const {fetchUserFavoritePokemons} = useAction();
  const {isAuth} = useTypedSelector(selectAuth);
  const {currentUser} = useTypedSelector(selectUserData);
  const {error, isLoading, favoritePokemons} = useTypedSelector(selectFavoritePokemons);
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>(getHighchartsOptions(favoritePokemons));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedType, setSelectedType] = useState(DEFAULT_POKEMON_TYPE_FILTER);
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState(favoritePokemons);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const paginationProps = {currentPage, setCurrentPage, totalPokemonCount: filteredPokemons.length};

  useEffect(() => {
    if (currentUser) fetchUserFavoritePokemons(currentUser.favoritePokemonsIndices);
  }, []);

  useEffect(() => {
    if (favoritePokemons.length) setPokemonTypes(getCurrentPokemonTypes(favoritePokemons));
  }, [favoritePokemons]);

  useEffect(() => {
    setChartOptions(getHighchartsOptions(filteredPokemons));
  }, [filteredPokemons]);

  useEffect(() => {
    setFilteredPokemons(getFilteredPokemons(selectedType, favoritePokemons));
  }, [selectedType, favoritePokemons]);

  if (!isAuth) return (
    <Typography variant='h3'>
      Please <NavLink to='/authorization'>login</NavLink> to view this page
    </Typography>)
  if (error) return <Typography variant='h4'>{error}</Typography>;

  return (
    <Box>
      <Typography variant='h2'>Hello {currentUser.name}</Typography>
      <CustomPagination {...paginationProps}/>
      <PokemonTypeFilter selectedType={selectedType} setSelectedType={setSelectedType} pokemonTypes={pokemonTypes}/>

      {isLoading
        ? <Loading/>
        :
        <Box>
          <FavoritePokemonsList pokemons={filteredPokemons} currentPage={currentPage}/>
          {chartOptions && <Chart options={chartOptions} chartComponentRef={chartComponentRef}/>}
        </Box>
      }
    </Box>
  );
});

export default UserPage;

