import React, {useEffect, useRef} from 'react'

export default function Hamburger({state}) {
    let menu = useRef(null)

    useEffect(() => {
        if(state.clicked === false){
            menu.style.display = 'none'
        }else if(state.clicked === true || state.clicked === true && state.initial === null){
            menu.style.display = 'block'
        }
        
    })

    return (
        <div ref = {el => (menu = el)} className="hamburger-menu">
            <div className="menu-secondary-background-color"></div> 
            <div className="menu-layer">
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li>inicio</li>
                                    <li>nosotros</li>
                                    <li>servicios</li>
                                    <li>contacto</li>
                                </ul>
                            </nav>
                            <div className="aviso">aviso de provacidad</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
