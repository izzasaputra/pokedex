// UserList.js
import React from "react";
import CardContainer from "@/container/home/cardContainer";
import PokemonModal from "@/component/ModalPokemon";
import PokemonLogo from "@/public/pokemon-Logo.png";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

function UserList() {
  return (
    <div>
      <div className={styles.pokemon_logo}>
        <Image alt="pokemon-logo" src={PokemonLogo} width={300} height={150} />
      </div>
      <CardContainer />
      <PokemonModal />
    </div>
  );
}

export default UserList;
