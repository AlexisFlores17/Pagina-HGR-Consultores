import React from 'react';

export const Footer = () =>{

    return(
        <div className="footerContenedor">
            <div className="footerParteSuperior" >
                <div className="footerSocial" >
                    <div className="social">Social</div>
                    <div className="redesContenido">
                        <div className="redes" ><a href="#">Linkedin</a></div>
                        <div className="redes" ><a href="#">Youtube</a></div>
                        <div className="redes" ><a href="#">Spotify</a></div>
                        <div className="redes" ><a href="#">Facebook</a></div>
                    </div>
                </div>
                <div className="footerContacto" >
                    <div className="contacto">Contacto</div>
                    <div className="footerContactoContenido">   
                        <div className="datos" >info@hgrconsultores.com.mx</div>
                        <div className="datos" >55 61725993</div>
                    </div>
                </div>
                <div className="footerOficina" >
                    <div className="oficina" >Oficina</div>
                    <div className="footerOficinaContenido" >
                        
                        <div className="direccion">Enrique Rébsamen  512</div>
                        <div className="direccion">Colonia Narvarte Poniente</div>
                        <div className="direccion">C.P. 03020 Alcaldía</div>
                        <div className="direccion">Benito Juárez</div>
                        <div className="direccion">Ciudad de México</div>
                        
                    </div>
                </div>
            </div>
            <div className="footerParteInferior" >
                <div className="footerEmpresa" >&copy; {new Date().getFullYear()} HGR consultores </div>
                <div className="footerEmpresaLink" >Suported by <a href="#">Light & Sound Disruptive Lab</a> </div>
                <div className="footerAvisoPrivacidad" > Aviso de Privacidad</div>
            </div>
            <div className="footerEmpresaLinkMovil" >Suported by <a href="#">Light & Sound Disruptive Lab</a> </div>
        </div>
    );
}