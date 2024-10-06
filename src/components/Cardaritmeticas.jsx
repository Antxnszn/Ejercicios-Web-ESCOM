import '../styles/appstyles.css';
import { Link } from 'react-router-dom'; // Usa el componente Link

function Cardaritmeticas() {
    return (
        <>
        <h2 className='mb-[2em] mt-[1.5em] text-xl lg:text-3xl text-center lg:text-left lg:ml-[5em]'>
            OPERACIONES ARITMETICAS
        </h2>
        <div className="flex flex-col lg:flex-row gap-[2.5em] lg:gap-[5em] justify-center items-center mt-[1em]">
          <div>
          <Link to="/parimpar" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                Par o Impar
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Introduce un número y descubre si es par o impar.
              </p>
            </Link>
          </div>
          
          <div>
          <Link to="/multisumas" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                Multiplicaciones Manuales
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Visualiza el producto de un número mediante sumas.
              </p>
            </Link>
          </div>
          
          <div>
            <Link to="/tablasmultiplicar" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                Tablas de multiplicar
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Introduce un número y visualiza su tabla de multiplicar.
              </p>
            </Link>
          </div>
          
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center mt-10 gap-[2.5em] lg:gap-[5em]'>
            <Link to="/media" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                Media
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Introduce una secuencia de números y calcula su media.
              </p>
            </Link>
            <Link to="/tablasmultiplicar" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                Par o Impar
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Introduce un número y descubre si es par o impar.
              </p>
            </Link>
        </div>
        </>
    );
}

export default Cardaritmeticas;
