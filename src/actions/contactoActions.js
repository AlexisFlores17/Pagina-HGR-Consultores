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

export const setNombre = (nombre)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            nombre: nombre,
        }
    }
}

export const setCorreo = (correo)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            correo: correo,
        }
    }
}

export const cambiarPagina = (pagina)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            pagina: pagina,
        }
    }
}

export const setConozcoSituacion = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            conozcoSituacion: value,
        }
    }
}

