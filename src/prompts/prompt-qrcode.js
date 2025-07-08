import chalk from "chalk";

const qrcodePrompt = [
  {
    name: "link",
    description: chalk.yellow("Informe o link para gerar o QRCode"),
    message: chalk.redBright("Link é obrigatório"),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRCode (1 - NORMAL ou 2 - TERMINAL)"
    ),
    message: chalk.redBright("Selecione apenas os tipos 1 ou 2"),
    pattern: /^[1-2]$/,
  },
];

export { qrcodePrompt };
