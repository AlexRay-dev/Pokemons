import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IUser} from "../../types/user";

interface UserState {
  user: IUser,
}

const initialState: UserState = {
    user: {
      name: ''
    },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUser>) {
      console.log(state, 'before')
      state.user = action.payload
      console.log(state, 'after')
    }
  }
});

export const {
  setUserData,
} = userSlice.actions;
export const selectUserData = (state: RootState) => state.userReducer;
export default userSlice.reducer;
