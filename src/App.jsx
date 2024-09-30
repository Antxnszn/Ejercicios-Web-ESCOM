import Header from './components/Header'
import './styles/appstyles.css'
import { ReactTyped } from "react-typed";

function App() {

  return (
    <div>
      <Header />
      <div>
      <div className='mainbgdiv'>
          
      </div>
          <div className="text-container">
              <h1 className='maintext'>Practicas Web</h1>
              
              <h2 style={{ backgroundColor: '#323232a5'}} className="maintext2 mt-2 rounded-md w-[5.5em]">
          {" "}
          <span className=" ml-2 text-transparent bg-clip-text bg-gradient-to-r to-[#7096c8] from-[#32cfff]">
            <ReactTyped
              strings={[
                "JavaScript",
                "HTML",
                "CSS",
              ]}
              typeSpeed={50}
              backSpeed={100}
              loop></ReactTyped>
          </span>
        </h2>
          </div>
          
      
      </div>
      <h2 className='titles  mt-[1.5em] ml-[5em]'>OPERACIONES ARITMETICAS</h2>
      <div className="flex flex-row gap-[5em] justify-center mt-[1em]">
  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
        Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>
</div>


<h2 className='titles  mt-[1.5em] ml-[5em]'>OPERACIONES ARITMETICAS</h2>
<div className="flex flex-row gap-[5em] justify-center mt-[1em]">
  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
        Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>
</div>


<h2 className='titles  mt-[1.5em] ml-[5em]'>OPERACIONES ARITMETICAS</h2>
<div className="flex flex-row gap-[5em] justify-center mt-[1em]">
  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
        Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-5 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center divformat tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>
</div>


    </div>
  )
}

export default App;
