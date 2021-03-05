import React from 'react';

export const MisionVision = () =>{

    return(
        <>
            <div className="mv-container" >
                <div className="circulos-container">
                    <div className="circulo-animado azul" ></div>
                    <div className="circulo-animado amarillo" ></div>
                </div>
                <div className="mv-texto-container">
                    <div className="mv-row first-row">
                        <h3>Misión, visión</h3>
                        <p>
                            Estamos convencidos de que la asesoría contable, 
                            fiscal y financiera está siempre detrás de una 
                            empresa sólida y fuerte. Por eso nuestra meta es 
                            crear y mantener una cultura de negocios en la que 
                            la formalidad y la legalidad, sean los pilares de 
                            emprendedores y empresarios exitosos.
                        </p>
                    </div>
                    <div className="mv-row">
                        <p>
                            Estamos comprometidos a ofrecer el mejor servicio a 
                            nuestros clientes, brindándoles asesorías profesionales 
                            y siempre siguiendo el código de ética. Así como a 
                            impulsarlos a llevar a cabo buenas prácticas fiscales y 
                            financieras, para nunca entorpecer el negocio en marcha. 
                            Es por esto que cualquier servicio, planeación o estrategia 
                            que nosotros recomendemos, estará siempre apegada a un marco 
                            legal vigente, garantizando la tranquilidad de nuestros clientes. 
                        </p>
                        <h3>y valores</h3>
                    </div>
                </div>
            </div>
        </>
    );
}   