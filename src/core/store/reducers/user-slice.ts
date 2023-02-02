import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IUser} from "../../types/user";
import {DetailedPokemon} from "../../types/pokemons";

interface UserState {
  user: IUser,
  favoritePokemons: DetailedPokemon[],
  isLoading: boolean,
  error: string,
}

const initialState: UserState = {
  user: {
    name: '',
  },
  favoritePokemons: [],
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
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
  setUserData,
  favoritePokemonsFetchingError,
  favoritePokemonsFetching,
  favoritePokemonsFetchingSuccess,
} = userSlice.actions;
export const selectUserData = (state: RootState) => state.userReducer;
export default userSlice.reducer;
