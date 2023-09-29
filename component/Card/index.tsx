import React from "react";
import { Card, Row, Col, Typography } from "antd";
import Image from "next/image";
import styles from "./card.module.scss";
import grassIcon from "../../public/grass.svg";
import fireIcon from "../../public/fire.svg";
import waterIcon from "../../public/water.svg";
import bugIcon from "../../public/bug.svg";
import normalIcon from "../../public/normal.svg";
import poisonIcon from "../../public/poison.svg";
import electricIcon from "../../public/electric.svg";
import groundIcon from "../../public/ground.svg";
import fairyIcon from "../../public/fairy.svg";
import fightingIcon from "../../public/fighting.svg";
import psychicIcon from "../../public/psychic.svg";
import rockIcon from "../../public/rock.svg";
import darkIcon from "../../public/dark.svg";
import dragonIcon from "../../public/dragon.svg";
import flyingIcon from "../../public/flying.svg";
import ghostIcon from "../../public/ghost.svg";
import iceIcon from "../../public/ice.svg";
import steelIcon from "../../public/steel.svg";
import { useDispatch } from "react-redux";
import {
  setOpenModal,
  setPokemonActive,
} from "../../store/slices/pokemonSlice";

const { Meta } = Card;

interface PokemonCardTypes {
  url: string | undefined;
  name: string;
  types: any[];
}

const { Text } = Typography;

const PokemonCard: React.FC<PokemonCardTypes> = ({ url, name, types }) => {
  const dispatch = useDispatch();
  const clickCardAction = (name: string) => {
    dispatch(setOpenModal(true));
    dispatch(setPokemonActive(name));
  };
  const backgroundColor = (type: string) => {
    switch (type) {
      case "grass":
        return "#60BD58";
      case "fire":
        return "#FBA64C";
      case "water":
        return "#539DDF";
      case "bug":
        return "#92BD2D";
      case "normal":
        return "#A0A29F";
      case "poison":
        return "#B763CF";
      case "electric":
        return "#F2D94E";
      case "ground":
        return "#DA7C4D";
      case "fairy":
        return "#EF90E6";
      case "fighting":
        return "#D3425F";
      case "psychic":
        return "#FA8582";
      case "rock":
        return "#D8BC5A";
      case "dark":
        return "#595761";
      case "dragon":
        return "#0C69C8";
      case "flying":
        return "#A1BBEC";
      case "ghost":
        return "#5F6DBC";
      case "ice":
        return "#75D0C1";
      case "steel":
        return "#5695A3";
      default:
        return "#FFFFFF";
    }
  };

  const iconType = (type: string) => {
    switch (type) {
      case "grass":
        return (
          <div className={`${styles.icon} ${styles.grass}`}>
            <Image src={grassIcon} alt="Grass" />
          </div>
        );
      case "fire":
        return (
          <div className={`${styles.icon} ${styles.fire}`}>
            <Image src={fireIcon} alt="Fire" />
          </div>
        );
      case "water":
        return (
          <div className={`${styles.icon} ${styles.water}`}>
            <Image src={waterIcon} alt="Water" />
          </div>
        );
      case "bug":
        return (
          <div className={`${styles.icon} ${styles.bug}`}>
            <Image src={bugIcon} alt="Bug" />
          </div>
        );
      case "normal":
        return (
          <div className={`${styles.icon} ${styles.normal}`}>
            <Image src={normalIcon} alt="Normal" />
          </div>
        );
      case "poison":
        return (
          <div className={`${styles.icon} ${styles.poison}`}>
            <Image src={poisonIcon} alt="Poison" />
          </div>
        );
      case "electric":
        return (
          <div className={`${styles.icon} ${styles.electric}`}>
            <Image src={electricIcon} alt="Electric" />
          </div>
        );
      case "ground":
        return (
          <div className={`${styles.icon} ${styles.ground}`}>
            <Image src={groundIcon} alt="Ground" />
          </div>
        );
      case "fairy":
        return (
          <div className={`${styles.icon} ${styles.fairy}`}>
            <Image src={fairyIcon} alt="Fairy" />
          </div>
        );
      case "fighting":
        return (
          <div className={`${styles.icon} ${styles.fighting}`}>
            <Image src={fightingIcon} alt="Fighting" />
          </div>
        );
      case "psychic":
        return (
          <div className={`${styles.icon} ${styles.psychic}`}>
            <Image src={psychicIcon} alt="Psychic" />
          </div>
        );
      case "rock":
        return (
          <div className={`${styles.icon} ${styles.rock}`}>
            <Image src={rockIcon} alt="Rock" />
          </div>
        );
      case "dark":
        return (
          <div className={`${styles.icon} ${styles.dark}`}>
            <Image src={darkIcon} alt="Dark" />
          </div>
        );
      case "dragon":
        return (
          <div className={`${styles.icon} ${styles.dragon}`}>
            <Image src={dragonIcon} alt="Dragon" />
          </div>
        );
      case "flying":
        return (
          <div className={`${styles.icon} ${styles.flying}`}>
            <Image src={flyingIcon} alt="Flying" />
          </div>
        );
      case "ghost":
        return (
          <div className={`${styles.icon} ${styles.ghost}`}>
            <Image src={ghostIcon} alt="Ghost" />
          </div>
        );
      case "ice":
        return (
          <div className={`${styles.icon} ${styles.ice}`}>
            <Image src={iceIcon} alt="Ice" />
          </div>
        );
      case "steel":
        return (
          <div className={`${styles.icon} ${styles.steel}`}>
            <Image src={steelIcon} alt="Steel" />
          </div>
        );
      default:
        return "";
    }
  };
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        backgroundColor: backgroundColor(types[0].type.name),
      }}
      cover={
        <div className={styles.cover_wrapper}>
          <h4 className={styles.label_code}>#{url}</h4>
          <img
            alt="example"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${url}.png`}
            style={{ position: "relative", zIndex: 2, width: 180 }}
            className={styles.pokemon_image}
          />
        </div>
      }
      className={styles.card_section}
      onClick={() => clickCardAction(name)}
    >
      <h2 className={styles.label_name}>{name}</h2>
      {types?.map((type) => (
        <Row key={type.type.name} className={styles.row_type}>
          <Col className={styles.type_container}>
            {iconType(type.type.name)}
            <span style={{ marginRight: 10 }} />
            <Text className={styles.type_name_label}>{type.type.name}</Text>
          </Col>
        </Row>
      ))}
      <div className={styles.pokeball}></div>
    </Card>
  );
};

export default PokemonCard;
