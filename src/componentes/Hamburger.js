import React, {useEffect, useRef} from 'react'
import gsap, { Ease } from 'gsap'

import { useDispatch } from 'react-redux';
import { abrirAviso, abrirContacto } from '../actions/contactoActions';


export default function Hamburger({state, handleMenu}) {
    
    //vars for animating Dom
    let menu = useRef(null)
    let revealMenuBackgroud = useRef(null)
    let revealMenu = useRef(null)    
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)
    let aviso = useRef(null)


    useEffect(() => {
        openCloseMenu()
    },[state])

    const openCloseMenu = () => {
        
        if(state.clicked === false){
            //close menu
            gsap.to([revealMenu, revealMenuBackgroud], {
                duration: 0.8,
                width: 0,
                x: "50vw",                
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }   
            });
            gsap.to(menu, {
                duration: 1,
                css: {display: 'none'}
            })
        }else if(state.clicked === true || state.clicked === true && state.initial === null){
            gsap.to(menu, {
                duration: 0,
                css: {display: "block"}
            })
            gsap.to([revealMenuBackgroud, revealMenu], {
                duration: 0,
                opacity: 1,
                width: "100%",
                x: 0
            })
            staggerReveal(revealMenuBackgroud, revealMenu)
            staggerText(line1, line2, line3, line4)
            fadeInUp(aviso)
        }
    }

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            width: 0,
            x: "50vw",
            // transformOrigin: "left bottom",
            skewY: 2,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        });
    };
    const staggerText = (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
          duration: 0.8,
          y: 100,
          delay: 0.1,
          ease: "power3.inOut",
          stagger: {
            amount: 0.3
          }
        });
      };
    
    const fadeInUp = node => {
        gsap.from(node, {
            y: 60,
            duration: 2,
            delay: 0.2,
            opacity: 0,
            ease: "power3.inOut"
        });
    };

    const dispatch = useDispatch();

    const clickContacto = () => {
        dispatch( abrirContacto() )
    }

    
    const clickAviso = () => {
        dispatch( abrirAviso() )
    }
    

    return (
        <div ref = {el => (menu = el)} className="hamburger-menu">                                    
            <div ref = {el => (revealMenuBackgroud = el)} className="menu-secondary-background-color"></div>             
            
            <div ref = {el => (revealMenu = el)} className="menu-layer">
                <div className="container">
                    
                    <div className="wrapper">                        
                        <div className="menu-links">
                            
                            <nav>
                                <ul>
                                
                                    <li ref = {el => (line1 = el)} className= "menuLi" onClick={handleMenu}><a href="#inicio" >inicio</a></li>
                                    <li ref = {el => (line2 = el)} className= "menuLi" onClick={handleMenu}><a href="#nosotros" >nosotros</a></li>
                                    <li ref = {el => (line3 = el)} className= "menuLi" onClick={handleMenu}><a href="#servicios">servicios</a></li>
                                    <li ref = {el => (line4 = el)} className= "menuLi" onClick={() => clickContacto()} >contacto</li>
                                </ul>
                            </nav>
                            <div ref = {el => (aviso = el)} className="aviso" onClick={() => clickAviso()}>aviso de privacidad</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
