import { types } from "../types/types";

export const abrirContacto = ()=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            abierto: true
        }
    }
}

export const cerrarContacto = ()=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            abierto: false
        }
    }
}