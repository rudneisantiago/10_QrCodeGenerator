import chalk from "chalk";
import { handle } from "./handle.js";

async function createPassword() {
  const password = await handle();
  console.log(chalk.greenBright("Password gerado"));
  console.log(chalk.blueBright(password));
}

export { createPassword };
