import Header from './src/components/Header'; // Asegúrate de tener este componente
import App from './src/pages/Main';
import TablaMultiplicar from './src/pages/tablasmultiplicar';
import Parimpar from './src/pages/Parimpar';
import Multisumas from './src/pages/Multisumas';
import MayorArreglo from './src/pages/Mayorarreglo';
import SumaVectores from './src/pages/SumaVectores';
import SortedArray from './src/pages/SortArray';
import InsertionSort from './src/pages/InsertionSort';
import SelectionSort from './src/pages/SelectionSort';
import BubbleSort from './src/pages/BubbleSort';
import NotFound from './src/pages/NotFound'; // Asegúrate de tener este componente
import Footer from './src/components/Footer'; // Asegúrate de tener este componente
import CalculadoraMedia from './src/pages/Calculadoramedia';

const routes = [
  {
    path: "/",
    component: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    )
  },
  {
    path: "/tablasmultiplicar",
    component: (
      <>
        <Header />
        <TablaMultiplicar />
       
      </>
    )
  },
  {
    path: "/parimpar",
    component: (
      <>
        <Header />
        <Parimpar />
        
      </>
    )
  },
  {
    path: "/multisumas",
    component: (
      <>
        <Header />
        <Multisumas />
      
      </>
    )
  },
  {
    path: "/media",
    component: (
      <>
        <Header />
        <CalculadoraMedia />
        
      </>
    )
  },
  {
    path: "/mayorarreglo",
    component: (
      <>
        <Header />
        <MayorArreglo />
        
      </>
    )
  },
  {
    path: "/sumavectores",
    component: (
      <>
        <Header />
        <SumaVectores />
        
      </>
    )
  },
  {
    path: "/sortedarray",
    component: (
      <>
        <Header />
        <SortedArray />
       
      </>
    )
  },
  {
    path: "/insertionsort",
    component: (
      <>
        <Header />
        <InsertionSort />
        
      </>
    )
  },
  {
    path: "/selectionsort",
    component: (
      <>
        <Header />
        <SelectionSort />
       
      </>
    )
  },
  {
    path: "/bubblesort",
    component: (
      <>
        <Header />
        <BubbleSort />
        
      </>
    )
  },
  {
    path: "*", // Ruta para páginas no encontradas
    component: <NotFound />
  }
];

export default routes;
