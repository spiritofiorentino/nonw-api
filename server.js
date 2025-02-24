const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000; // Usa la porta assegnata da Render

app.use(cors()); // Permette le richieste CORS
app.use(express.json()); // Abilita il parsing dei JSON

// **Test route per verificare se il server funziona**
app.get("/", (req, res) => {
  res.send("✅ NOWN API is running correctly on Render!");
});

// **Altre API routes possono essere aggiunte qui**

// **Avvia il server**
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
