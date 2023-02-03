import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authReducer from './reducers/auth-slice'
import userReducer from './reducers/user-slice'
import pokemonsReducer from './reducers/pokemons-slice'
import favoritePokemonsReducer from './reducers/favorite-pokemons-slice'

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  pokemonsReducer,
  favoritePokemonsReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false
    })
  })
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];