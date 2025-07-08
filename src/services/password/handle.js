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

async function handle() {
  let password = "";

  const characters = await permittedCharacters();
  const passwordLength = process.env.PASSWORD_LENGTH;

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export { handle };
