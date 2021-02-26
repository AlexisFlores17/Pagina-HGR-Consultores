import React, { useEffect } from 'react';
import lax from "lax.js";

import { NosotrosMain }   from "./NosotrosComponentes/NosotrosMain";
import { MisionVision }   from "./NosotrosComponentes/MisionVision";
import { CuadroAzul }   from "./NosotrosComponentes/CuadroAzul";

export const Nosotros = () =>{

    useEffect(() => {
        lax.init()
        lax.addDriver("scrollY", function () {
            return window.scrollY;
        });

        lax.addElements(['.azul', '.amarillo'],{
            scrollY: {  
                opacity: [
                  ['elInY+200', 'elCenterY', 'elOutY'],
                  [0, 1, 0]
                ],
            }
        })
        lax.addElements('.cuadro-azul',{
            scrollY: {  
                translateX: [
                  ['elInY', 'elCenterY-200'],
                  ['-elWidth', 0]
                ],
            }
        })
        return () => {
            lax.removeElements(['.azul', '.amarillo', '.cuadro-azul']);
        }
    }, [])

    return(
        <>
            {/* <div className="ejemplo"></div> */}
            <NosotrosMain />
            <MisionVision />
            <CuadroAzul /> 
        </>
    );
}