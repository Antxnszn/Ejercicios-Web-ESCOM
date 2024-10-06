
import { Link } from 'react-router-dom'; // Usa el componente Link


function Cardvectores() {
return (

<>
        <h2 className='mb-[1.8em] mt-[1.5em] text-xl lg:text-3xl text-center lg:text-left lg:ml-[5em]'>VECTORES</h2>
        <div className="flex flex-col lg:flex-row gap-[2.5em] lg:gap-[5em] justify-center items-center mt-[1em]">
          <div>
          <Link to="/mayorarreglo" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                ¿Mayor?
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Introduce numeros en un arreglo y visualiza cuál es el mayor.
              </p>
            </Link>
          </div>
          
          <div>
          <Link to="/sumavectores" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
                Suma Vectorial
              </h5>
              <p className="text-sm mt-2 mb-5 lg:mb-0 lg:mt-0 lg:text-lg text-center">
                Introduce dos vectores y visualiza su suma.
              </p>
            </Link>
          </div>
          
          <div>
            <Link to="/sortedarray" className="card-hover block max-w-xs p-5 border-2 border-blue-950 rounded-lg shadow">
              <h5 className="text-xl font-bold mb-2 text-center tracking-tight">
              Orden, Orden
              </h5>
              <p className="text-sm lg:text-lg text-center">
                Forma un arreglo de enteros y observalo ordenado.
              </p>
            </Link>
          </div>
          
        </div>
        </>




)
}

export default Cardvectores;