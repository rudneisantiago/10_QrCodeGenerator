import { permittedCharacters } from "./permitted-characters.js";

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
