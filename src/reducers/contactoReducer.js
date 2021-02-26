import { types } from "../types/types"; 


export const contactoReducer = ( initialState = {
    abierto: false,
    nombre: "",
    correo: "",
    conozcoSituacion: false,
    areaAyuda: "",
    areaAyuda2: "",
    tipoPersona: "",
    tipoPersona2: "",
    tipoPersona3: "",
    residencia: "",
    pagina: 1
    
}, action )=>{
    switch (action.type) {  
        case types.ActualizarContacto:
            return{
                ...initialState,
                ...action.payload
            };     
        case types.resetContacto:
            return{
                abierto: false,
                nombre: "",
                correo: "",
                conozcoSituacion: false,
                areaAyuda: "",
                areaAyuda2: "",
                tipoPersona: "",
                tipoPersona2: "",
                tipoPersona3: "",
                residencia: "",
                pagina: 1
            };     
        default:
            return initialState;
    }
}