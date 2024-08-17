import { Elysia } from "elysia";
import { readFileSync } from "fs";

const app = new Elysia();

app.get("/", () => {
  const html = readFileSync("public/index.html", "utf-8");
  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
