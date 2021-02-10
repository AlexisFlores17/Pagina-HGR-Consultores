import {Header}     from "./componentes/Header";
import {Nosotros}   from "./componentes/Nosotros";
import {Servicios}  from "./componentes/ServiciosComponentes/Servicios";
import {Proyectos}  from "./componentes/Proyectos";
import {Contacto}   from "./componentes/Contacto";
import {Footer}     from "./componentes/Footer";
import {Inicio}     from "./componentes/Inicio";

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
