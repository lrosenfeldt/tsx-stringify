import { createServer } from "node:http";

import { stringify } from "@tsx-stringify/core";

import { Home } from "./Home";

const PORT = 5777;

const server = createServer(async (req, res) => {
  const content = await (<Home />);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(content);
});

server.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);
