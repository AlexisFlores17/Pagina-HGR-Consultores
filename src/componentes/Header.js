import React, {useState} from 'react';
import Hamburger from './Hamburger'
export const Header = () =>{

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    })

    const [disabled, setDisabled] = useState(false)

    const handleMenu = () => {
        disableMenu()
        if(state.initial === false){
            setState({
                initial: null,
                clicked: true,
                menuName: "Cerrar"
            })
            
        }else if(state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
            
        }
        else if(state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
            
        }
    }

    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }




    return (
        <header >
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            HGR<span>.</span>                                                        
                        </div>
                        
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state}/>
        </header>
      )
}

