import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
const PORT = 4000;

app.get("/", (c) => c.json({ message: "Hello from Hono!" }));

serve({
  fetch: app.fetch,
  port: PORT
}, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
