import prompt from "prompt";
import { promptSchemaMain } from "./prompts-schema/index.js";
import { createQrCode } from "./services/qrcode/index.js";
import { createPassword } from "./services/password/index.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, { select }) => {
    if (err) {
      console.log(err);
      return;
    }

    if (select == 1) {
      await createQrCode();
    } else {
      await createPassword();
    }
  });

  prompt.start();
}

main();
