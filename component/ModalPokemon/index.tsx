import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "antd";
import { setOpenModal } from "../../store/slices/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getPokemonCode } from "@/utils/getPokemonCode";
import styles from "./modal.module.scss";

const PokemonModal = () => {
  const [detailPokemon, setDetailPokemon] = useState<any>([]);
  const dispatch = useDispatch();
  const openModal = useSelector(
    (state: RootState) => state.getPokemon?.openModal
  );
  const allPokemon = useSelector(
    (state: RootState) => state.getPokemon?.dataPagination
  );
  const pokemonActive = useSelector(
    (state: RootState) => state.getPokemon?.pokemonActive
  );

  const convertHeightAndWeight = (height: number) => {
    return height / 10;
  };

  useEffect(() => {
    const data = allPokemon.filter((item) => item.name === pokemonActive);
    setDetailPokemon(data);
    console.log(detailPokemon);
  }, [pokemonActive]);

  return (
    <>
      <Modal
        centered
        open={openModal}
        onOk={() => dispatch(setOpenModal(false))}
        onCancel={() => dispatch(setOpenModal(false))}
        className={styles[`type-${detailPokemon[0]?.types[0].type.name}`]}
        width={900}
      >
        <div className={styles.title_section}>
          <p
            className={`${styles.pokemon_name} ${styles.pokemon_padding_title}`}
          >
            {detailPokemon[0]?.name}
          </p>
          <p
            className={`${styles.pokemon_code} ${styles.pokemon_padding_title}`}
          >
            {getPokemonCode(detailPokemon[0]?.url)}
          </p>
        </div>
        <Row style={{ marginTop: 24 }}>
          <Col lg={12} sm={24} md={24} xs={24}>
            <img
              alt="example"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonCode(
                detailPokemon[0]?.url
              )}.png`}
              style={{ position: "relative", zIndex: 2, width: 280 }}
            />
          </Col>
          <Col lg={12} sm={24} md={24} xs={24}>
            <Row>
              <Col lg={12}>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                  <Col>Tinggi</Col>
                  <Col>
                    {convertHeightAndWeight(detailPokemon[0]?.height)} m
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                  <Col>Berat</Col>
                  <Col>
                    {convertHeightAndWeight(detailPokemon[0]?.weight)} kg
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                  <Col>Tinggi</Col>
                  <Col>70</Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                  <Col>Tinggi</Col>
                  <Col>70</Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                  <Col>Tinggi</Col>
                  <Col>70</Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row style={{ display: "flex", flexDirection: "column" }}>
                  <Col>Tinggi</Col>
                  <Col>70</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PokemonModal;
