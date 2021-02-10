import React from 'react';
import { NosotrosMain }   from "./NosotrosComponentes/NosotrosMain";
import { MisionVision }   from "./NosotrosComponentes/MisionVision";
import { CuadroAzul }   from "./NosotrosComponentes/CuadroAzul";

export const Nosotros = () =>{

    return(
        <>
            <div className="ejemplo"></div>
            <NosotrosMain />
            <MisionVision />
            <CuadroAzul /> 
        </>
    );
}