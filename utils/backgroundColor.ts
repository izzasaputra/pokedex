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
