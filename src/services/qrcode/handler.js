import chalk from "chalk";
import qrcode from "qrcode-terminal";

async function handle(err, { link, type }) {
  if (err) {
    console.log(err);
    return;
  }

  if (type == 1) {
    generate(link, true);
  } else {
    generate(link, false);
  }
}

function generate(link, small) {
  qrcode.generate(link, { small }, (qrcode) => {
    console.log(chalk.greenBright("QRCode gerado com sucesso:"));
    console.log(qrcode);
  });
}

export { handle };
