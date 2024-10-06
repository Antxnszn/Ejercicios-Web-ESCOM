import React, { useState } from 'react';

function ArregloOrdenado() {
  const [arreglo, setArreglo] = useState([]);
  const [nuevoValor, setNuevoValor] = useState('');
  const [error, setError] = useState('');
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const agregarValor = () => {
    setError('');
    const valor = parseFloat(nuevoValor);
    if (isNaN(valor)) {
      setError('Por favor, ingrese un número válido.');
      return;
    }
    setArreglo(prevArreglo => {
      const nuevoArreglo = [...prevArreglo, valor];
      return ordenarArreglo(nuevoArreglo);
    });
    setNuevoValor('');
  };

  const manejarKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      agregarValor();
    }
  };

  const ordenarArreglo = (arr) => {
    return arr.sort((a, b) => ordenAscendente ? a - b : b - a);
  };

  const cambiarOrden = () => {
    setOrdenAscendente(!ordenAscendente);
    setArreglo(prevArreglo => ordenarArreglo([...prevArreglo]));
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Arreglo Ordenado</h1>
      <div className="flex space-x-2">
        <input
          type="number"
          value={nuevoValor}
          onChange={(e) => setNuevoValor(e.target.value)}
          onKeyPress={manejarKeyPress}
          placeholder="Ingrese un número"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <button 
          onClick={agregarValor}
          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Agregar
        </button>
        <button 
          onClick={cambiarOrden}
          className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {ordenAscendente ? 'Cambiar a Descendente' : 'Cambiar a Ascendente'}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Arreglo Ordenado ({ordenAscendente ? 'Ascendente' : 'Descendente'}):</h2>
        <div className="flex flex-wrap gap-2">
          {arreglo.map((valor, index) => (
            <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {valor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArregloOrdenado;