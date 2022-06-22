import "dotenv/config";

import express from "express";
import consola from "consola";
import { router } from "./routes";

async function main() {
  const app = express();
  const PORT = process.env.PORT || 4000;
  app.use(router);
  app.listen(PORT, () => {
    consola.success(`Server listening on port ${PORT}`);
  });
}

main().catch(consola.error);
