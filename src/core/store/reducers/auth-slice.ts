import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface AuthState {
  isAuth: boolean,
}

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuthStatus(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    }
  }
});

export const {
  setAuthStatus,
} = authSlice.actions;
export const selectAuth = (state: RootState) => state.authReducer;
export default authSlice.reducer;
