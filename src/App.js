import { useSelector } from "react-redux";
import {useEffect} from 'react'

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

  useEffect(() => {

    window.onload = function(){
        document.querySelector(".loader").style.opacity = "0";
        setTimeout(function(){
          document.querySelector(".loader").style.display = "none";
        },1000);
    }
  
  },[]) 

  return (
    <div className="App">
      <Loader />
      <Header />
      { (!state.abierto && !state.aviso) &&
        <>
          <Inicio />
          <Nosotros />
          <Servicios />
          <Proyectos />
          <Footer />
        </>
      }

      {
        state.abierto && <Contacto />
      }

      {
        state.aviso &&
        <AvisoDePrivacidad />
      }

    </div>
  );
}

export default App;
