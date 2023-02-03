import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {ICurrentUser} from "../../types/user";

interface UserState {
  currentUser: ICurrentUser,
}

const initialState: UserState = {
  currentUser: {
    name: '',
    favoritePokemonsIndices: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<ICurrentUser>) {
      state.currentUser = action.payload;
    },
  }
});

export const {
  setUserData,
} = userSlice.actions;
export const selectUserData = (state: RootState) => state.userReducer;
export default userSlice.reducer;
