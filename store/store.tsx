import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counterSlice";
import pokemonReducer from "../store/slices/pokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    getPokemon: pokemonReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
