import React from 'react';

export const Footer = () =>{

    return(
        <div className="footerContenedor">
            <div className="footerParteSuperior" >
                <div className="footerSocial" >
                    <div>Social</div>
                    <div>Linkedin</div>
                    <div>Youtube</div>
                    <div>Spotify</div>
                    <div>Facebook</div>
                </div>
                <div className="footerContacto" >
                    <div>Contacto</div>
                    <div>info@hgrconsultores.com.mx</div>
                    <div>55 61725993</div>
                </div>
                <div className="footerOficina" >
                    <div>Oficina</div>
                    <div>
                        Enrique Rébsamen  512 Colonia Narvarte Poniente
                        C.P. 03020 Alcaldía Benito Juárez
                        Ciudad de México
                    </div>
                </div>
            </div>
            <div className="footerParteInferior" >
                <div className="footerEmpresa" >&copy; 2021 LSD Lab </div>
                <div className="footerAvisoPrivacidad" > Aviso de Privacidad</div>
            </div>
        </div>
    );
}