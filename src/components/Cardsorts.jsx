import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import '../styles/appstyles.css';

function Cardsorts() {
  return (
    <>
      <h2 className='mb-[1.8em] mt-[1.5em] text-xl lg:text-3xl text-center lg:text-left lg:ml-[5em]'>ORDENAMIENTOS</h2>
      <div className="flex flex-col lg:flex-row gap-[2.5em] lg:gap-[5em] justify-center items-center mt-[1em]">
        <div>
          <Link to="/insertionsort" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
            <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
              Inserción.
            </h5>
            <p className="text-sm lg:text-lg text-center">
              Introduce elementos en tu vector y ordénalo mediante inserción.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/selectionsort" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
            <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
              Selección
            </h5>
            <p className="text-sm lg:text-lg text-center">
              Visualiza a tu vector ser ordenado mediante selección.
            </p>
          </Link>
        </div>
        <div>
          <Link to="/bubblesort" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
            <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
              Burbujas!
            </h5>
            <p className="text-sm mb-5 lg:mb-0 px-1 lg:px-0 lg:text-lg text-center">
              Ordena tu arreglo con el algoritmo burbúja.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cardsorts;
