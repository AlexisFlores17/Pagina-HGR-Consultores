import React,{ useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MisionVision = () =>{

    gsap.registerPlugin(ScrollTrigger);

    let circuloAzul = useRef(null);
    let circuloAmarillo = useRef(null);
    let misionVision = useRef(null);

    useEffect(() => {
        enter()
        return () => {
        }
    }, [])

    const enter = () => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: misionVision,
                start: "top center",
                end: "top 50px",
                markers: false,
                toggleActions: "play pause reverse reset",
                scrub: true,
            },
        })
        tl.from(circuloAzul,{
            x: "-50vw",
            duration: 60
        })
        tl.from(circuloAmarillo,{
            x: "50vw",
            duration: 60
        },0)
        tl.to(circuloAzul,{
            css: {animation: "circle 6s linear infinite"}
        })
        tl.to(circuloAmarillo,{
            css: {animation: "circle2 6s linear infinite"}
        })

        return tl;
    }


    return(
        <>
            <div className="mv-container" ref={ el => (misionVision = el) }>
                <div className="circulos-container">
                    <div className="circulo-animado azul" ref={el => (circuloAzul = el )} ></div>
                    <div className="circulo-animado amarillo" ref={el => (circuloAmarillo = el )}></div>
                </div>
                <div className="mv-texto-container">
                    <div className="mv-row first-row">
                        <h3>misión, visión</h3>
                        <p>
                            Estamos convencidos de que la asesoría contable, 
                            fiscal y financiera está siempre detrás de una 
                            empresa sólida y fuerte. por eso nuestra meta es 
                            crear y mantener una cultura de negocios en la que 
                            la formalidad y la legalidad, sean los pilares de 
                            emprendedores y empresarios exitosos.
                        </p>
                    </div>
                    <div className="mv-row">
                        <p>
                            Estamos comprometidos a ofrecer el mejor servicio a 
                            nuestros clientes, brindándoles asesorías profesionales 
                            y siempre siguiendo el código de ética. así como a 
                            impulsarlos a llevar a cabo buenas prácticas fiscales y 
                            financieras, para nunca entorpecer el negocio en marcha. 
                            es por esto que cualquier servicio, planeación o estrategia 
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