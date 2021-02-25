import React,{ useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MisionVision = () =>{

    gsap.registerPlugin(ScrollTrigger);

    let circuloAzul = useRef(null);
    let circuloAmarillo = useRef(null);
    let misionVision = useRef(null);

    useEffect(() => {
        // hovering(circuloAzul, 0)
        // hovering(circuloAmarillo, 1)
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: misionVision,
                start: "top center",
                end: "top 50px",
                markers: true,
                toggleActions: "play pause reverse reset",
                scrub: true
            },
        })
        tl.from(circuloAzul,{
            x: "-50vw",
        })
        tl.from(circuloAmarillo,{
            x: "50vw",
        },0)
        return () => {
        }
    }, [])

    const hovering = (elemento, delay) => {

        const tl = gsap.timeline({
            repeat:-1, 
            delay: delay,
        });
         /*Can Animation*/
        tl
            //move top left
        .to(elemento, { y:'-=30', x:'+=20',  rotation:'-=5', ease:"power1.inOut", duration: 3,})
        
            //move down right
        .to(elemento, { y:'+=30', x:'-=20', rotation:'-=5', ease:"power1.inOut", duration: 2,})
        
        
        .to(elemento, { y:'-=20',  rotation:'+=5', ease:"power1.inOut", duration: 3,})
        
        .to(elemento, { y:'+=20',  rotation:'+=5', ease:"power1.inOut", duration: 3,})
        
        
        .to(elemento, { y:'-=50', ease:"power1.inOut", duration: 3,})
           
        .to(elemento, { y:'+=50', ease:"power1.inOut", duration: 3,})
        
        
        .to(elemento, { y:'-=30', ease:"power1.inOut", duration: 3,})
           
        .to(elemento, { y:'+=30', ease:"power1.inOut", duration: 3,})
        
        
        .to(elemento, { y:'-=30', ease:"power1.inOut", duration: 2,})
           
        .to(elemento, { y:'+=30', ease:"power1.inOut", duration: 2,})
  
        gsap.to(tl, {ease:"power1.inOut", duration: 27})

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