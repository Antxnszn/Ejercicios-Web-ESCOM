import React, { useState } from 'react';

function OrdenamientoSeleccion() {
  const [arreglo, setArreglo] = useState([]);
  const [nuevoValor, setNuevoValor] = useState('');
  const [error, setError] = useState('');
  const [pasos, setPasos] = useState([]);
  const [pasoActual, setPasoActual] = useState(-1);

  const agregarValor = () => {
    setError('');
    const valor = parseFloat(nuevoValor);
    if (isNaN(valor)) {
      setError('Por favor, ingrese un número válido.');
      return;
    }
    const nuevoArreglo = [...arreglo, valor];
    setArreglo(nuevoArreglo);
    setNuevoValor('');
    ordenarPorSeleccion(nuevoArreglo);
  };

  const manejarKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      agregarValor();
    }
  };

  const ordenarPorSeleccion = (arr) => {
    const pasos = [JSON.parse(JSON.stringify(arr))];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        pasos.push(JSON.parse(JSON.stringify(arr)));
      }
    }
    
    setPasos(pasos);
    setPasoActual(pasos.length - 1);
  };

  const avanzarPaso = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    }
  };

  const retrocederPaso = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  const renderArreglo = (arr, paso) => (
    <div className="flex flex-wrap gap-2 mb-2">
      {arr.map((valor, index) => (
        <div 
          key={index} 
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            index === paso ? 'bg-yellow-300 text-gray-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {valor}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Ordenamiento por Selección</h1>
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
          Agregar y Ordenar
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full max-w-md">
        <h2 className="text-xl text-center font-semibold mb-2">Visualización del Ordenamiento:</h2>
        {pasos.length > 0 && renderArreglo(pasos[pasoActual], pasoActual)}
        <div className="flex justify-center space-x-2 mt-4">
          <button 
            onClick={retrocederPaso} 
            disabled={pasoActual === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Paso Anterior
          </button>
          <button 
            onClick={avanzarPaso} 
            disabled={pasoActual === pasos.length - 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Siguiente Paso
          </button>
        </div>
        <p className="text-center mt-2">Paso {pasoActual + 1} de {pasos.length}</p>
      </div>
    </div>
  );
}

export default OrdenamientoSeleccion;