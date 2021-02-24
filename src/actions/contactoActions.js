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

export const setAreaAyuda = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            areaAyuda: value,
        }
    }
}

export const setAreaAyuda2 = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            areaAyuda2: value,
        }
    }
}

export const setTipoPersona = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            tipoPersona: value,
        }
    }
}

export const setTipoPersona2 = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            tipoPersona2: value,
        }
    }
}

export const setTipoPersona3 = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            tipoPersona3: value,
        }
    }
}

export const setResidencia = (value)=>{
    return{
        type: types.ActualizarContacto,
        payload:{
            residencia: value,
        }
    }
}

export const reset = ()=>{
    return{
        type: types.resetContacto,
    }
}

