import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TimelineState {
  isLoading: boolean
}

const initialState: TimelineState = {
  isLoading: false,
}

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    pokemonsFetching(state, action) {
      state.isLoading = true;
    },
    pokemonsFetchingSuccess(state, action) {
      state.isLoading = false;
    },
    pokemonsFetchingError(state, action) {
      state.isLoading = false;
    },
  }
})

export const {
  pokemonsFetching,
  pokemonsFetchingSuccess,
  pokemonsFetchingError
} = pokemonsSlice.actions

export default pokemonsSlice.reducer