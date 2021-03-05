

export const getAreaAyuda = (value) => {
    switch (value) {
        case "contable":
            return "Contable";            
        case "fiscal":
            return "Fiscal";            
        case "financiera":
            return "Financiera";            
        case "nomina/ss":
            return "Nómina y/o seguridad social";            
        case "otro":
            return "Otro";            
    
        default:
            return "N/A"
    }
}

export const getAreaAyuda2 = (value) => {
    switch (value) {
        case "regularizacion":
            return "Regularización";            
        case "impuestos":
            return "Devoluciones de impuestos";            
        case "planeacion":
            return "Planeación";            
        case "inversion":
            return "Elaboración de proyectos de inversión y/o presupuestos";            
        case "valuacion":
            return "Valuación";            
        case "otro":
            return "Otro";            
    
        default:
            return "N/A"
    }
}

export const getTipoPersona = (value) => {
    switch (value) {
        case "moral":
            return "Persona Moral";            
        case "fisica":
            return "Persona Física";                
        default:
            return "Física"
    }
}

export const getTipoPersona2 = (value) => {
    switch (value) {
        case "anonima":
            return "Sociedad anónima";            
        case "mercantil":
            return "Otra sociedad mercantil";                
        case "soCivil":
            return "Sociedad civil";                
        case "asCivil":
            return "Asociación civil";                
        case "otro":
            return "Otro";                
        default:
            return "N/A"
    }
}

export const getTipoPersona3 = (value) => {
    switch (value) {
        case "colectivo":
            return "Sociedad en nombre colectivo";            
        case "comandita":
            return "Sociedad en comandita simple";                
        case "limitada":
            return "Sociedad de responsabilidad limitada";                
        case "acciones":
            return "Sociedad en comandita por acciones";                
        case "cooperativa":
            return "Sociedad cooperativa";                
        case "sas":
            return "Sociedad por acciones simplificadas";                
        case "fideicomiso":
            return "Fideicomiso";                
        case "participacion":
            return "Asociación en participación";                
        case "empresarial":
            return "Actividad empresarial";                
        case "profesionales":
            return "Servicios profesionales";                
        case "rif":
            return "Régimen de incorporación fiscal";                
        case "digitales":
            return "Plataformas digitales";                
        case "sueldos":
            return "Sueldos y salarios/Asimilado a salarios";                
        case "otro":
            return "Otro";                
        default:
            return "N/A"
    }
}

export const getResidencia = (value) => {
    switch (value) {
        case "mexico":
            return "México";            
        case "extranjero":
            return "Extranjero";                
        default:
            return "Física"
    }
}

