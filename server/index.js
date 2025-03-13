const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/calculate", (req, res) => {
  const { num1, num2, operation } = req.query;

  if (!num1 || !num2 || !operation) {
    return res.status(400).json({ error: "Faltan parámetros" });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "Los parámetros deben ser números" });
  }

  let result;
  switch (operation) {
    case "sum":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      if (n2 === 0) return res.status(400).json({ error: "División por cero" });
      result = n1 / n2;
      break;
    default:
      return res.status(400).json({ error: "Operación no válida" });
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
