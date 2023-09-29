import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPokemon,
  fetchPokemonPagination,
  fetchAllPokemon,
  fetchSearchPokemon,
} from "../../action/pokemonAction";

interface PokemonState {
  dataPagination: any[];
  count: number;
  loading: boolean;
  error: boolean;
  allPokemon: any[];
  currentPage: any;
  openModal: boolean;
  pokemonActive: string;
}

const initialState: PokemonState = {
  dataPagination: [],
  count: 0,
  loading: false,
  error: false,
  allPokemon: [],
  currentPage: 1,
  openModal: false,
  pokemonActive: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setPokemonActive: (state, action) => {
      state.pokemonActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.dataPagination = action.payload;
        state.count = 0;
        state.error = false;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchPokemonPagination.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPokemonPagination.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.dataPagination = action.payload;
          state.count = 0;
          state.error = false;
        }
      )
      .addCase(fetchPokemonPagination.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchAllPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllPokemon.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.allPokemon = action.payload.results;
          state.error = false;
        }
      )
      .addCase(fetchAllPokemon.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchSearchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchSearchPokemon.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.dataPagination = [
            { ...action.payload, ...action.payload.species },
          ];
          state.count = 1;
          state.error = false;
        }
      )
      .addCase(fetchSearchPokemon.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setCurrentPage, setOpenModal, setPokemonActive } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
