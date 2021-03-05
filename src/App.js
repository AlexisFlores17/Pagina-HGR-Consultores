import { useSelector } from "react-redux";

import {Header}     from "./componentes/Header";
import {Nosotros}   from "./componentes/Nosotros";
import {Servicios}  from "./componentes/Servicios";
import {Proyectos}  from "./componentes/Proyectos";
import {Contacto}   from "./componentes/Contacto";
import {Footer}     from "./componentes/Footer";
import { Inicio } from "./componentes/Inicio";
import Loader from "./componentes/Loader";
import { AvisoDePrivacidad } from "./componentes/AvisoDePrivacidad";

function App() {

  const state = useSelector(state => state.contactoReducer)

  return (
    <div className="App">
      <Loader />
      <Header />
      <Inicio />
      <AvisoDePrivacidad />
      <Nosotros />
      <Servicios />
      <Proyectos />
      { state.abierto 
        && <Contacto />
      }
      <Footer />
    </div>
  );
}

export default App;
