import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {DetailedPokemon} from "../../types/pokemons";

interface TimelineState {
  isLoading: boolean,
  error: string,
  pokemons: any[],
}

const initialState: TimelineState = {
  isLoading: false,
  error: '',
  pokemons: [],
}

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    pokemonsFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    pokemonsFetchingSuccess(state, action: PayloadAction<DetailedPokemon[]>) {
      state.isLoading = false;
      state.pokemons = action.payload;
    },
    pokemonsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export const {
  pokemonsFetching,
  pokemonsFetchingSuccess,
  pokemonsFetchingError,
} = pokemonsSlice.actions;
export const selectPokemons = (state: RootState) => state.pokemonsReducer;
export default pokemonsSlice.reducer;