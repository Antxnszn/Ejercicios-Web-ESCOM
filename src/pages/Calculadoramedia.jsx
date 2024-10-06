import React, { useState } from 'react';

function CalculadoraMedia() {
  const [numeros, setNumeros] = useState('');
  const [media, setMedia] = useState(null);
  const [error, setError] = useState('');

  const calcularMedia = () => {
    // Limpiar estados previos
    setMedia(null);
    setError('');

    // Convertir la entrada en un array de números
    const numerosArray = numeros.split(',').map(num => num.trim());

    // Validar que todos los elementos sean números
    const numerosValidos = numerosArray.every(num => !isNaN(parseFloat(num)) && isFinite(num));

    if (!numerosValidos) {
      setError('Por favor, ingrese solo números válidos separados por comas.');
      return;
    }

    // Convertir strings a números y calcular la media
    const numerosNumericos = numerosArray.map(Number);
    const suma = numerosNumericos.reduce((acc, curr) => acc + curr, 0);
    const mediaCalculada = suma / numerosNumericos.length;

    setMedia(mediaCalculada);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Calculadora de Media</h1>
      <div className="w-full max-w-md">
        <textarea
          value={numeros}
          onChange={(e) => setNumeros(e.target.value)}
          placeholder="Ingrese números separados por comas (por ejemplo: 1, 2, 3, 4)"
          className="w-full p-2 border border-gray-300 rounded resize-y"
          
        />
      </div>
      <button 
        onClick={calcularMedia}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Calcular Media
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {media !== null && (
        <div className="text-lg font-semibold">
          La media es: {media.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default CalculadoraMedia;