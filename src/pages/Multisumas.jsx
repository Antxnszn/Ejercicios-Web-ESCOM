import React, { useState } from 'react';

function MultiplicacionPorSumas() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');
  const [pasos, setPasos] = useState([]);

  const multiplicarPorSumas = () => {
    const n1 = parseInt(numero1, 10);
    const n2 = parseInt(numero2, 10);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Por favor, ingrese números válidos');
      setPasos([]);
      return;
    }

    let suma = 0;
    const pasosTemp = [];

    for (let i = 0; i < Math.abs(n2); i++) {
      suma += Math.abs(n1);
      pasosTemp.push(`${suma} = ${Math.abs(n1)} ${i > 0 ? `+ ${suma - Math.abs(n1)}` : ''}`);
    }

    // Ajustar el signo del resultado
    const resultadoFinal = (n1 < 0) !== (n2 < 0) ? -suma : suma;

    setResultado(`Resultado: ${resultadoFinal}`);
    setPasos(pasosTemp);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Multiplicación por Sumas</h1>
      <div className="flex space-x-2">
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          placeholder="Primer número"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <span className="text-2xl">×</span>
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          placeholder="Segundo número"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <button 
        onClick={multiplicarPorSumas}
        className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Calcular
      </button>
      <div className="text-lg font-semibold">{resultado}</div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Pasos:</h2>
        <ul className="list-disc list-inside">
          {pasos.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiplicacionPorSumas;