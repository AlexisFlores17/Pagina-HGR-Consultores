import {Header}     from "./componentes/Header";
import {Nosotros}   from "./componentes/Nosotros";
import {Servicios}  from "./componentes/ServiciosComponentes/Servicios";
import {Proyectos}  from "./componentes/Proyectos";
import {Contacto}   from "./componentes/Contacto";
import {Footer}     from "./componentes/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
