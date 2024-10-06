import React, { useState } from 'react';

function SumaVectores() {
  const [vectorA, setVectorA] = useState([]);
  const [vectorB, setVectorB] = useState([]);
  const [vectorC, setVectorC] = useState([]);
  const [nuevoValorA, setNuevoValorA] = useState('');
  const [nuevoValorB, setNuevoValorB] = useState('');
  const [error, setError] = useState('');

  const agregarValor = (vector, setVector, valor, otherVector) => {
    setError('');
    const numeroValor = parseFloat(valor);
    if (isNaN(numeroValor)) {
      setError('Por favor, ingrese un número válido.');
      return;
    }
    const nuevoVector = [...vector, numeroValor];
    setVector(nuevoVector);
    
    // Actualizar vector C si ambos vectores tienen la misma longitud
    if (otherVector.length === nuevoVector.length) {
      const nuevoVectorC = nuevoVector.map((val, index) => val + otherVector[index]);
      setVectorC(nuevoVectorC);
    } else if (otherVector.length > nuevoVector.length) {
      const nuevoVectorC = otherVector.map((val, index) => val + (nuevoVector[index] || 0));
      setVectorC(nuevoVectorC);
    } else {
      const nuevoVectorC = nuevoVector.map((val, index) => val + (otherVector[index] || 0));
      setVectorC(nuevoVectorC);
    }
  };

  const manejarKeyPress = (e, vector, setVector, valor, setValor, otherVector) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      agregarValor(vector, setVector, valor, otherVector);
      setValor('');
    }
  };

  const renderVector = (vector, label) => (
    <div className="w-full max-w-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Vector {label}:</h2>
      <div className="flex flex-wrap gap-2">
        {vector.map((valor, index) => (
          <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {valor}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Suma de Vectores</h1>
      <div className="flex space-x-4">
        <div>
          <input
            type="number"
            value={nuevoValorA}
            onChange={(e) => setNuevoValorA(e.target.value)}
            onKeyPress={(e) => manejarKeyPress(e, vectorA, setVectorA, nuevoValorA, setNuevoValorA, vectorB)}
            placeholder="Valor para A"
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button 
            onClick={() => {
              agregarValor(vectorA, setVectorA, nuevoValorA, vectorB);
              setNuevoValorA('');
            }}
            className="ml-2 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Agregar a A
          </button>
        </div>
        <div>
          <input
            type="number"
            value={nuevoValorB}
            onChange={(e) => setNuevoValorB(e.target.value)}
            onKeyPress={(e) => manejarKeyPress(e, vectorB, setVectorB, nuevoValorB, setNuevoValorB, vectorA)}
            placeholder="Valor para B"
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button 
            onClick={() => {
              agregarValor(vectorB, setVectorB, nuevoValorB, vectorA);
              setNuevoValorB('');
            }}
            className="ml-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Agregar a B
          </button>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {renderVector(vectorA, 'A')}
      {renderVector(vectorB, 'B')}
      {renderVector(vectorC, 'C (A + B)')}
    </div>
  );
}

export default SumaVectores;