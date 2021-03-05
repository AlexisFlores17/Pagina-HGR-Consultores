import React from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch} from 'react-redux';
import { cerrarAviso } from '../actions/contactoActions';

export const AvisoDePrivacidad = () => {

    const dispatch = useDispatch();
    
    const cerrar = () => {
        dispatch(cerrarAviso());
    }

    return (
        <div className="avisoDePrivacidadContainer">
            <div className="btn-cerrar">
                <span onClick={() => cerrar()} className="cerrar-icon">
                    <MdClose />
                </span>
            </div>
            <div className="avisoDePrivacidad-content">
                <h1 className="tituloAvisoPrivacidad">Aviso de privacidad</h1>

                <p className="parrafosAviso">
                    Identidad y domicilio del responsable de sus datos personales
                    El responsable del tratamiento de sus datos personales es el C. Héctor Garín García, 
                    que opera bajo el nombre comercial “HGR Consultores”,
                    con domicilio fiscal en Mérida 24, Colonia Miguel de la Madrid Hurtado. C.P. 09698.
                </p>

                <p className="parrafosAviso">
                Recopilación y uso de datos personales
                Se garantiza la confidencialidad y privacidad de la información que nos ha confiado. 
                Como parte de esta obligación fundamental, HGR Consultores se compromete a utilizar adecuadamente la información personal 
                y/o datos personales que se recopilen a través de su sitio web y/o sea proporcionada voluntariamente por los visitantes de este. 

                </p>

                <p className="parrafosAviso">
                    Datos personales objeto de tratamiento
                    Obtenemos datos personales sobre los usuarios, únicamente cuando ellos deciden enviarlos,
                    para poder contactarlos mediante correo electrónico o vía telefónica. Al registrar y/o enviar
                    datos personales en nuestro sitio web, usted también acepta el uso de esta información de acuerdo
                    con este Aviso de Privacidad. Su información personal no se utilizará para otros fines, a menos
                    que nos dé su consentimiento, o a menos que sea requerido o permitido por la ley y aplicable.
                    Todo lo anterior, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>

                <p className="parrafosAviso">
                    Finalidades del tratamiento de datos personales
                    La única finalidad de obtener datos personales es utilizarlos para
                    contactar al interesado y poder generar relaciones de negocios y/o
                    prestación de servicios profesionales, así como para conocer su situación
                    en términos contables, fiscales y/o financieros para poder asesorarlo de la
                    mejor manera. En el caso de solicitar información adicional, le avisaremos para que proceda su autorización.
                </p>



                <p className="parrafosAviso">
                    Intercambio y transferencia de datos personales
                    Nosotros no compartimos datos personales con terceros,
                    excepto cuando sea estrictamente necesario para nuestras necesidades profesionales,
                    esto para poder llevar a cabo de la mejor manera posible el servicio contratado o posible de contratar.
                </p>


                <p className="parrafosAviso">
                    Mecanismos para manifestar la negativa al tratamiento de datos personales
                    Usted no está obligado a declarar o enviar ningún dato personal cuando visita
                    nuestro sitio web, pero podemos requerir que proporcione cierta información, como su nombre,
                    correo electrónico, número telefónico, y/o información de la situación fiscal, contable y/o
                    financiera sobre la cual requerirá asesoría; para que pueda recibir información adicional
                    sobre nuestros servicios y/o el seguimiento al servicio solicitado.
                </p>

                <p className="parrafosAviso">
                    Acceso
                    Si usted nos ha compartido información personal, tiene derecho a un acceso razonable a esos
                    datos para corregir cualquier inexactitud. También puede ejercer su solicitud de derechos ARCO
                    para actualizar o eliminar información sobre usted, poniéndose en contacto con nosotros a través
                    del correo electrónico info@hgrconsultores.com.mx y nosotros daremos cumplimiento a lo solicitado,
                    siempre que sea compatible con la ley aplicable.
                </p>


                <p className="parrafosAviso">
                    Vínculos a otros sitios
                    Hay que tener en cuenta que este sitio web puede contener vínculos a otros sitios,
                    como redes sociales y/o páginas de contenido multimedia. La información que proporcione
                    a estos sitios después de haber utilizado el enlace o el vínculo a través de nuestro sitio web,
                    será responsabilidad suya y del sitio en cuestión, no de HGR Consultores.
                </p>

                <p className="parrafosAviso">
                    Medios y procedimientos para ejercer los derechos de ARCO
                    En cualquier momento usted podrá ejercer sus Derechos de Acceso, Rectificación, Cancelación y/u Oposición (Derechos ARCO)
                    respecto al tratamiento de sus datos personales, ya sea por sí mismo o por medio de su representante legal.
                    Para tal efecto y de conformidad con el artículo 29 de la LFPDPPP, podrá enviar su solicitud de Derechos de
                    ARCO al correo electrónico info@hgrconsultores.com.mx  la cual deberá contener y acompañar lo siguiente:
                </p>
                <p className="parrafosAviso">
                    -	 Nombre completo y domicilio
                    -	 Los documentos que acrediten su identidad
                    -	La descripción clara y precisa de los Datos Personales respecto de los que busca ejercer alguno de sus derechos ARCO, y;
                    -	Cualquier otro elemento o documento que facilite la localización de sus Datos Personales.
                </p>

                <p className="parrafosAviso">
                    Preguntas
                    Nos comprometemos a proteger la privacidad de su información personal. Si tiene preguntas o comentarios adicionales
                    por favor contáctenos al correo electrónico  info@hgrconsultores.com.mx
                </p>


            </div>
        </div>
    )
}
