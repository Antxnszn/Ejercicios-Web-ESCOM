import { useState } from "react";

function TablaMultiplicar() {
  const [numero, setNumero] = useState(0); // Estado para el número ingresado
  const [tabla, setTabla] = useState([]);  // Estado para almacenar la tabla generada

  // Manejar cambio del input
  const manejarCambio = (e) => {
    const valor = parseInt(e.target.value);
    setNumero(valor);
  };

  // Generar la tabla de multiplicar
  const generarTabla = () => {
    const nuevaTabla = [];
    if (numero > 0) {
      for (let i = 1; i <= 10; i++) {
        nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
      }
    }
    setTabla(nuevaTabla);
  };

  // Limpiar la tabla y resetear el número
  const limpiarTabla = () => {
    setTabla([]);
    setNumero(0);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      {/* Mostrar input si no hay tabla generada */}
      {tabla.length === 0 ? (
        <>
          <h1 className="text-2xl mb-4">Tabla de Multiplicar</h1>
          <input
            type="number"
            value={numero}
            onChange={manejarCambio}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Escribe un número"
          />
          <button
            onClick={generarTabla}
            className="bg-blue-500 text-white p-2 rounded-md ml-2"
          >
            Generar Tabla
          </button>
        </>
      ) : (
        <>
          {/* Mostrar la tabla generada */}
          <h1 className="text-2xl mb-4">Tabla de Multiplicar del {numero}</h1>
          <ul>
            {tabla.map((linea, index) => (
              <li key={index}>{linea}</li>
            ))}
          </ul>
          <button
            onClick={limpiarTabla}
            className="bg-red-500 text-white p-2 rounded-md mt-4"
          >
            Generar otra tabla
          </button>
        </>
      )}
    </div>
  );
}

export default TablaMultiplicar;
