async function permittedCharacters() {
  let characters = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (process.env.UPPERCASE_LETTERS === "true") {
    characters.push(...alphabet);
  }

  if (process.env.LOWERCASE_LETTERS === "true") {
    characters.push(...alphabet.toLowerCase());
  }

  if (process.env.NUMBERS === "true") {
    characters.push(..."0123456789");
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    characters.push(..."!@#$%^&*()-_");
  }

  return characters;
}

export { permittedCharacters };
