import React, { useState } from 'react';

function ParImpar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const esPar = (num) => {
    return (num & 1) === 0;
  };

  const verificarParImpar = () => {
    const numeroEntero = parseInt(numero, 10);
    if (isNaN(numeroEntero)) {
      setResultado('Por favor, ingrese un número válido');
    } else {
      setResultado(esPar(numeroEntero) ? 'Par' : 'Impar');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 id="title" className="text-2xl font-bold">Par / Impar</h1>
      <input
        type="number"
        id="input"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingrese un número"
        className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs"
      />
      <button 
        id="button" 
        onClick={verificarParImpar}
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Verificar
      </button>
      <p className="text-lg font-semibold">{resultado}</p>
    </div>
  );
}

export default ParImpar;