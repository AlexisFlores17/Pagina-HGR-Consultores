import { useSelector } from "react-redux";

import {Header}     from "./componentes/Header";
import {Nosotros}   from "./componentes/Nosotros";
import {Servicios}  from "./componentes/Servicios";
import {Proyectos}  from "./componentes/Proyectos";
import {Contacto}   from "./componentes/Contacto";
import {Footer}     from "./componentes/Footer";
import { Inicio } from "./componentes/Inicio";

function App() {

  const state = useSelector(state => state.contactoReducer)

  return (
    <div className="App">
      <Header />
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
