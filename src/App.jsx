import Header from './components/Header'
import './styles/appstyles.css'

function App() {

  return (
    <div>
      <Header />
      <div>
      <h2 className='titles divtitles mt-[1em]'>OPERACIONES ARITMETICAS</h2>
      </div>
      <div className="divformat mt-[1em]">
  <div>
    <a href="#" className="card-hover block max-w-xs p-2 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
        Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-2 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font text-center">
      Texto ejemplo.
      </p>
    </a>
  </div>

  <div>
    <a href="#" className="card-hover block max-w-xs p-2 border border-blue-950 rounded-lg shadow">
      <h5 className="mb-2 cardtitles text-center tracking-tight">
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
