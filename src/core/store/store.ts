import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/auth-slice'
import userReducer from './reducers/user-slice'

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];