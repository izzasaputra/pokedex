export const getPokemonCode = (url: string) => {
  if (url !== undefined) {
    const parts = url.split("/");
    const code = parts[parts.length - 2];

    let finalCode = "";

    if (code.length === 1) {
      finalCode = "00" + code;
    } else if (code.length === 2) {
      finalCode = "0" + code;
    } else {
      finalCode = code;
    }

    return finalCode;
  }
};
