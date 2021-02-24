import React from 'react';
import FondoPodcast from "../images/imagenGarin16.jpg";
import { FaSpotify } from "react-icons/fa";

export const Proyectos = () =>{

    return(
        <div className="proyectosContenido">
            <div className="proyectosPodcastFondo img-fluid"></div>
            <div className="proyectosIzquierda">   
                <div className="proyectosPodcast">
                    <div className="titulo">HGR Consultores</div>
                    <div className="imagen"><img src={FondoPodcast} className="img-fluid imagenLogo"/></div>
                    <div className="descripcion">
                        Aquí tocaremos temas interesantes relacionados con todo lo que ocurre
                        en el mundo de los contadores
                    </div>

                </div>
            </div>
            <div className="proyectosDerecha">
                <div className="proyectosFoto"><div className="foto"></div></div>
                <div className="proyectosInformacion">
                    <div className="proyectosTexto">
                        <div className="proyectosLogoSpotify">
                            <FaSpotify className="logoProyectos"/>
                            <div className="textoLogo"><a href="#">Escuchalo en Spotify</a></div>
                        </div>
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
                            <div className="item"><a href="#">Youtube</a></div>
                            <div className="item"><a href="#">Apple Music</a></div>
                            <div className="item"><a href="#">Spotify</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}