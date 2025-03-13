'use client'
import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState<number | null>(null);

  const calculate = async () => {
    console.log(`Enviando: num1=${num1}, num2=${num2}, operation=${operation}`);
    const response = await fetch(
      `http://localhost:3001/calculate?num1=${num1}&num2=${num2}&operation=${operation}`
    );
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="border p-2"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="border p-2"
        >
          <option value="sum">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="border p-2"
        />
      </div>
      <button onClick={calculate} className="mt-4 p-2 bg-blue-500 text-white">
        Calcular
      </button>
      {result !== null && <p className="mt-4 text-xl">Resultado: {result}</p>}
    </div>
  );
}
