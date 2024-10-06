import '../styles/appstyles.css'
import { ReactTyped } from "react-typed";
import Cardaritmeticas from '../components/Cardaritmeticas';
import Cardvectores from '../components/Cardvectores';
import Cardsorts from '../components/Cardsorts';



function App() {
  
  return (
    
  <div>
    <div>
      <div className='mainbgdiv'>
        
      </div>
      <div className="text-container">
        <h1 className='maintext'>Practicas Web</h1>
        
        <h2 style={{ backgroundColor: '#323232a5'}} className="maintext2 mt-2 rounded-md w-[2.5em ]lg:w-[5.5em]">
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
    <Cardaritmeticas/>
    <Cardvectores/>
    <Cardsorts/>
    
      </div>
  
  )
}

export default App;
