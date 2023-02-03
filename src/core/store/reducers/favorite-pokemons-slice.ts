import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {DetailedPokemon} from "../../types/pokemons";

interface FavoritePokemonsState {
  favoritePokemons: DetailedPokemon[],
  isLoading: boolean,
  error: string,
}

const initialState: FavoritePokemonsState = {
  favoritePokemons: [],
  isLoading: false,
  error: '',
};

const favoritePokemonsSlice = createSlice({
  name: 'favorite-pokemons',
  initialState,
  reducers: {
    favoritePokemonsFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    favoritePokemonsFetchingSuccess(state, action: PayloadAction<DetailedPokemon[]>) {
      state.isLoading = false;
      state.favoritePokemons = action.payload;
    },
    favoritePokemonsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const {
  favoritePokemonsFetchingError,
  favoritePokemonsFetching,
  favoritePokemonsFetchingSuccess,
} = favoritePokemonsSlice.actions;
export const selectFavoritePokemons = (state: RootState) => state.favoritePokemonsReducer;
export default favoritePokemonsSlice.reducer;
