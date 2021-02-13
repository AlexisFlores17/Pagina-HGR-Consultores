import React from 'react';
import Foto from "../images/imagenGarin3.png";

export const Proyectos = () =>{

    return(
        <div className="proyectosContenido">
            <div className="proyectosIzquierda">
                <div className="proyectosPodcast">
                    <div className="titulo">HGR Consultores</div>
                    <div className="imagen"></div>
                    <div className="descripcion">Descripcion podcast</div>
                </div>
            </div>
            <div className="proyectosDerecha">
                <div className="proyectosFoto"><img src={Foto} className="foto img-fluid" alt="Responsive image" /></div>
                <div className="proyectosInformacion">
                    <div className="proyectosTexto">
                        <div className="proyectosLogoSpotify">Escuchalo en Spotify</div>
                        <div className="proyectosFiscalizados">
                            <div className="titulo">Fiscalizados</div>
                            <div className="texto">
                                Nuestros proyectos digitales buscan promover y apoyar la cultura contable en 
                                los negocios. Puedes escucharnos en cualquier plataforma de podcast como 
                                “fiscalizados” y también ver nuestro material en el canal de youtube.
                            </div>
                        </div>
                    </div>
                    <div className="proyectosRedes">
                        <div className="vertical">
                            <div className="item">Youtube</div>
                            <div className="item">Apple Music</div>
                            <div className="item"> Spotify</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}