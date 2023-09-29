import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../service/apiConfig";

interface PokemonQuery {
  limit: number;
  offset: number;
}

interface PokemonSearch {
  name: string;
}

export const fetchPokemon = createAsyncThunk("fetchPokemon", async () => {
  const response = await axios.get("pokemon?limit=20&offset=0");
  const data = response.data.results;

  const additionalData = await Promise.all(
    data.map(async (pokemon: any) => {
      const response = await axios.get(pokemon.url);
      return response.data;
    })
  );

  const mergedData = data.map((pokemon: any, index: number) => ({
    ...pokemon,
    ...additionalData[index],
  }));

  return mergedData;
});

export const fetchAllPokemon = createAsyncThunk("fetchAllPokemon", async () => {
  const response = await axios.get("pokemon?limit=1010&offset=0");
  return response.data;
});

export const fetchBothPokemons = () => async (dispatch: any) => {
  try {
    await dispatch(fetchPokemon());
    await dispatch(fetchAllPokemon());
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonPagination = createAsyncThunk(
  "fetchPokemonPagination",
  async (query: PokemonQuery) => {
    const response = await axios.get(
      `pokemon?limit=${query.limit}&offset=${query.offset}`
    );
    const data = response.data.results;

    const additionalData = await Promise.all(
      data.map(async (pokemon: any) => {
        const response = await axios.get(pokemon.url);
        return response.data;
      })
    );

    const mergedData = data.map((pokemon: any, index: number) => ({
      ...pokemon,
      ...additionalData[index],
    }));

    return mergedData;
  }
);

export const fetchSearchPokemon = createAsyncThunk(
  "fetchSearchPokemon",
  async (name: PokemonSearch) => {
    const response = await axios.get(`pokemon/${name}`);
    return response.data;
  }
);
