import prompt from "prompt";

import { qrcodePrompt } from "../../prompts/index.js";
import { handle } from "./handler.js";

async function createQrCode() {
  prompt.get(qrcodePrompt, handle);

  prompt.start();
}

export { createQrCode };
