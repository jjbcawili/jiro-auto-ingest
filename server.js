
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/.well-known/ai-plugin.json", (req, res) => {
  res.sendFile(new URL("./public/.well-known/ai-plugin.json", import.meta.url).pathname);
});

app.get("/oauth/authorize", (req, res) => {
  res.send("OAuth authorize placeholder – integrate provider here.");
});

app.get("/oauth/callback", (req, res) => {
  if (!req.query.code) return res.status(400).send("Missing code");
  res.send("OAuth callback received. Token exchange not yet implemented.");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
