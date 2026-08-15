import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import handler from "./api/chat.js";

const PORT = process.env.PORT || 3000;
const TYPES = { ".html": "text/html", ".css": "text/css" };

createServer(async (req, res) => {
  if (req.url === "/api/chat" && req.method === "POST") {
    let body = ""; for await (const c of req) body += c;
    req.body = JSON.parse(body || "{}");
    return handler(req, {
      status(c) { res.statusCode = c; return this; },
      json(o) { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(o)); return this; },
    });
  }
  const path = req.url === "/" ? "/index.html" : req.url.split("?")[0];
  try {
    const buf = await readFile(new URL("./public" + path, import.meta.url));
    res.setHeader("content-type", TYPES[path.slice(path.lastIndexOf("."))] ?? "application/octet-stream");
    res.end(buf);
  } catch { res.statusCode = 404; res.end("not found"); }
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
