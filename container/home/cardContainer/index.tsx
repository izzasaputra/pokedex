// UserList.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBothPokemons,
  fetchPokemonPagination,
} from "../../../store/action/pokemonAction";
import { Row, Col } from "antd";
import { RootState } from "@/store/store";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import style from "./cardContainer.module.scss";
import PokemonCard from "@/component/Card";
import SearchInput from "@/component/Search";
import LoadingState from "@/component/Loading";
import NotFound from "@/component/Error";
import { setCurrentPage } from "../../../store/slices/pokemonSlice";
import { getPokemonCode } from "@/utils/getPokemonCode";

const CardContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: RootState) => state.getPokemon?.dataPagination
  );
  const loading = useSelector((state: RootState) => state.getPokemon?.loading);
  const error = useSelector((state: RootState) => state.getPokemon?.error);
  const count = useSelector((state: RootState) => state.getPokemon?.count);
  const currentPage = useSelector(
    (state: RootState) => state.getPokemon?.currentPage
  );

  const handlePageChange: PaginationProps["onChange"] = (page) => {
    dispatch(setCurrentPage(page) as any);
  };

  useEffect(() => {
    dispatch(fetchBothPokemons() as any);
  }, []);

  useEffect(() => {
    if (currentPage <= 52) {
      const offsetValue = (currentPage - 1) * 20;
      const query = { limit: 20, offset: offsetValue };
      dispatch(fetchPokemonPagination(query) as any);
    }
  }, [currentPage]);

  return (
    <div className={style.card_container}>
      <Row className={style.search_wrapper}>
        <SearchInput />
      </Row>
      {loading ? (
        <Row className={style.loading_container}>
          <LoadingState />
        </Row>
      ) : error ? (
        <Row className={style.loading_container}>
          <NotFound />
        </Row>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {data.map((pokemon, index) => (
              <Col key={pokemon.name} lg={6} md={6} sm={12} xs={12}>
                {currentPage === 51 && index < 10 ? (
                  <PokemonCard
                    url={getPokemonCode(pokemon.url)}
                    name={pokemon.name}
                    types={pokemon.types}
                  />
                ) : currentPage !== 51 ? (
                  <PokemonCard
                    url={getPokemonCode(pokemon.url)}
                    name={pokemon.name}
                    types={pokemon.types}
                  />
                ) : null}
              </Col>
            ))}
          </Row>
          <div className={style.paginationContainer}>
            {count !== 1 && (
              <Pagination
                defaultCurrent={1}
                total={1010}
                pageSize={20}
                current={currentPage}
                onChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardContainer;
