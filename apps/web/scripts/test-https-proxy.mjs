import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import http from "node:http";
import https from "node:https";
import { tmpdir } from "node:os";
import { join } from "node:path";
import process from "node:process";

const directory = mkdtempSync(join(tmpdir(), "strive-test-https-"));
const key = join(directory, "key.pem");
const cert = join(directory, "cert.pem");

process.on("exit", () => rmSync(directory, { recursive: true, force: true }));
execFileSync(
  "openssl",
  [
    "req",
    "-x509",
    "-newkey",
    "rsa:2048",
    "-nodes",
    "-keyout",
    key,
    "-out",
    cert,
    "-days",
    "1",
    "-subj",
    "/CN=127.0.0.1",
  ],
  { stdio: "ignore" },
);

const server = https.createServer(
  { key: readFileSync(key), cert: readFileSync(cert) },
  (request, response) => {
    if (request.url === "/__test/https-health") {
      response.writeHead(200);
      response.end("ready");
      return;
    }

    const upstream = http.request(
      {
        hostname: "127.0.0.1",
        port: 3100,
        method: request.method,
        path: request.url,
        headers: {
          ...request.headers,
          "x-forwarded-proto": "https",
          "x-forwarded-host": request.headers.host,
        },
      },
      (incoming) => {
        response.writeHead(incoming.statusCode ?? 502, incoming.headers);
        incoming.pipe(response);
      },
    );
    upstream.on("error", () => {
      if (!response.headersSent) response.writeHead(502);
      response.end();
    });
    request.pipe(upstream);
  },
);

server.listen(3143, "127.0.0.1");
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
