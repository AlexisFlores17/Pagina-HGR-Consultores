import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";

import {Header}     from "./componentes/Header";
import {Nosotros}   from "./componentes/Nosotros";
import {Servicios}  from "./componentes/ServiciosComponentes/Servicios";
import {Proyectos}  from "./componentes/Proyectos";
import {Contacto}   from "./componentes/Contacto";
import {Footer}     from "./componentes/Footer";


function App() {

  const state = useSelector(state => state.contactoReducer)

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Nosotros />
        <Servicios />
        <Proyectos />
        { state.abierto 
          && <Contacto />
        }
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
