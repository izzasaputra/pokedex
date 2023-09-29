import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Input, Space, AutoComplete, Button } from "antd";
import styles from "./search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  fetchSearchPokemon,
  fetchPokemon,
} from "../../store/action/pokemonAction";
import { getPokemonCode } from "../../utils/getPokemonCode";
import { setCurrentPage } from "../../store/slices/pokemonSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<any>();
  const allPokemon = useSelector(
    (state: RootState) => state.getPokemon?.allPokemon
  );
  const options =
    allPokemon?.map((pokemon) => ({
      value: pokemon.name,
      code: getPokemonCode(pokemon.url),
    })) || [];

  const handleOnSearch = (e: string) => {
    if (e !== undefined) {
      if (e.charAt(0) === " ") {
        setSearchValue("");
      } else {
        setSearchValue(e);
      }
    }
  };

  const handleSearch = () => {
    if (searchValue === undefined || searchValue === "") {
      dispatch(fetchPokemon() as any);
      dispatch(setCurrentPage(1));
    } else {
      dispatch(fetchSearchPokemon(searchValue) as any);
    }
  };
  return (
    <div className={styles.search_wrapper}>
      <AutoComplete
        style={{ width: 200 }}
        options={options.map((option) => ({
          value: option.value,
          label: (
            <div>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${option.code}.png`}
                alt={option.value}
                style={{ marginRight: 8, width: 40, height: 40 }}
              />
              {option.value}
            </div>
          ),
        }))}
        allowClear
        onChange={handleOnSearch}
        value={searchValue}
        placeholder="Search Your Pokemon"
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <Button onClick={handleSearch}>
        <SearchOutlined />
      </Button>
    </div>
  );
};

export default SearchInput;
