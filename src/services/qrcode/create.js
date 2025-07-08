import prompt from "prompt";

import { promptSchemaQrCode } from "../../prompts-schema/index.js";
import { handle } from "./handler.js";

async function createQrCode() {
  prompt.get(promptSchemaQrCode, handle);

  prompt.start();
}

export { createQrCode };
