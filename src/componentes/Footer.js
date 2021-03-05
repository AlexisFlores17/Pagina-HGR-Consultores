import React from 'react';
import { useDispatch } from 'react-redux';
import { abrirAviso } from '../actions/contactoActions';

export const Footer = () =>{

    const dispatch = useDispatch();

    const clickAviso = () => {
        scrollTop()
        dispatch( abrirAviso() );
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div className="footerContenedor">
            <div className="footerParteSuperior" >
                <div className="footerSocial" >
                    <div className="social">Social</div>
                    <div className="redesContenido">
                        <div className="redes" ><a href="https://www.linkedin.com/company/hgr-consultores/" target="_blank">Linkedin</a></div>
                        <div className="redes" ><a href="https://www.youtube.com/channel/UClRXHZkMR-rsfJ43lrTVXYg" target="_blank">Youtube</a></div>
                        <div className="redes" ><a href="https://open.spotify.com/show/7onU4tNA0HhMdymcHixJZy?si=XWkX_JXkQxu1IFhMQnKuuw&nd=1" target="_blank">Spotify</a></div>
                        <div className="redes" ><a href="https://www.facebook.com/consultoreshgr" target="_blank">Facebook</a></div>
                    </div>
                </div>
                <div className="footerContacto" >
                    <div className="contacto">Contacto</div>
                    <div className="footerContactoContenido">   
                        <div className="datos" ><a href="mailto:info@hgrconsultores.com.mx">info@hgrconsultores.com.mx</a></div>
                        <div className="datos" ><a href="tel:5561725993">55 61725993</a></div>
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
                <div className="footerEmpresaLink" >Suported by <a href="https://lsdlab.com.mx/" target="_blank" > Light & Sound Disruptive Lab</a> </div>
                <div className="footerAvisoPrivacidad" onClick={() => clickAviso()} > Aviso de Privacidad</div>
            </div>
            <div className="footerEmpresaLinkMovil" >Suported by <a href="https://lsdlab.com.mx/" target="_blank" className="ml-1"> Light & Sound Disruptive Lab</a> </div>
        </div>
    );
}