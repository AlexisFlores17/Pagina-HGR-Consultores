import React from 'react';

export const NosotrosMain = () =>{
    return(
        <>
            <div className="nosotros-fondo">
                <div className="sombra-fondo"></div>
                <div className="nosotros-container">
                    <div className="col-xs-12 col-sm-6 col-md-7 columna-izquierda">
                        <div className="nosotros-titulo">
                            <div className="divider"></div>
                            <h1>Nosotros</h1>
                            <p>Asesoría fiscal, contable y financiera enfocada en el mejor desarrollo de empresarios a nivel nacional.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="scroll-container">
                <div className=" col-xs-12 col-sm-6 col-md-5 columna-derecha">
                    <div className="nosotros-titulo">
                        <h1>Nosotros</h1>
                        <p>Asesoría fiscal, contable enfocada en el mejor desarrollo de empresarios a nivel nacional.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="numero-redondo">1</div>
                    <h3>Mejor desarrollo de empresarios a nivel nacional</h3>
                    <p>
                        Con casi cinco años de experiencia, 
                        HGR Consultores comenzó como un proyecto 
                        de protección fiscal para pequeños y medianos 
                        contribuyentes, es así que ahora somos una 
                        firma dedicada a la asesoría fiscal, contable y financiera 
                        enfocada en el mejor desarrollo de empresarios 
                        a nivel nacional.
                    </p>

                    <div className="divider"></div>
                    <div className="numero-redondo">2</div>
                    <h3>Información confiable, veraz y oportuna</h3>
                    <p>
                        Nos basamos en la generación de información 
                        financiera confiable, veraz y oportuna para 
                        así darle pie al cumplimiento de obligaciones 
                        fiscales, creando una atmósfera en la que   
                        se tiene una buena relación con las autoridades 
                        fiscales y en la que se tiene información útil 
                        para la toma de decisiones del empresario.      
                    </p>

                </div>
            </div>
        </>

    );
}