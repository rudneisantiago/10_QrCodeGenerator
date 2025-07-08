import chalk from "chalk";

const promptSchemaMain = {
  name: "select",
  description: chalk.yellow(
    "Escolha a ferramente (1 - QRCODE ou 2 - PASSWORD)"
  ),
  pattern: /^[1-2]$/,
  message: chalk.redBright("Escolha apenas entre as opções 1 e 2"),
  required: true,
};

export { promptSchemaMain };
