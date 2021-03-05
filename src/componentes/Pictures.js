import React, {useState, useEffect, useRef} from 'react'
import gsap, { Ease } from 'gsap'
import img1 from '../images/circularImg/imagenGarin1.png'
import img2 from '../images/circularImg/imagenGarin2.png'
import img4 from '../images/circularImg/imagenGarin4.png'
import img5 from '../images/circularImg/imagenGarin5.png'
import img7 from '../images/circularImg/imagenGarin7.png'
import img8 from '../images/circularImg/imagenGarin8.png'
import img9 from '../images/circularImg/imagenGarin9.png'
import img10 from '../images/circularImg/imagenGarin10.png'
import img11 from '../images/circularImg/imagenGarin11.png'
import img12 from '../images/circularImg/imagenGarin12BW.png'
import img13 from '../images/circularImg/imagenGarin13.png'
import img14 from '../images/circularImg/imagenGarin14.png'
import img15 from '../images/circularImg/imagenGarin15.png'
import InputGroupWithExtras from 'react-bootstrap/esm/InputGroup'

export default function Pictures() {
    //array of all photos
    let photos = [img1, img2, img4, img5, img7, img8, img9, img10, img11, img12, img13, img14, img15]
    //States
    const [photo, setPhoto] = useState(img1);
    const [photo2, setPhoto2] = useState(img2);
    const [photo3, setPhoto3] = useState(img4);
    //Reference to DOM elements
    let refImg1 = useRef(null)
    let refImg2 = useRef(null)
    let refImg3 = useRef(null)
    

    useEffect(() => {    
        let isMounted = true
        if(isMounted === true){
            
            firstFade(refImg1, 6000)      
            firstFade(refImg2, 4000)        
            firstFade(refImg3, 5000)          
    
            changePhoto(refImg1, 6000)
            changePhoto2(refImg2, 4000)
            changePhoto3(refImg3, 5000)            
        }

        return () => {
            
            isMounted = false;
          };

    }, [])

    //Function to change picture 
    const changePhoto = (refImg, time) => {                  
        var count = 0                                
        setInterval(() => {            
            fadeInUp(refImg, time)                
            var randomNumber = Math.floor(Math.random() * 11 )            
            count = (count + randomNumber) % photos.length
            setPhoto(photos[count])            
        }, time);     
        
    } 
    const changePhoto2 = (refImg, time) => {                  
        var count = 0                                
        setInterval(() => {            
            fadeInUp(refImg, time)                
            var randomNumber = Math.floor(Math.random() * 11 )            
            count = (count + randomNumber) % photos.length
            setPhoto2(photos[count])            
        }, time);     
        
    }     

    const changePhoto3 = (refImg, time) => {                  
        var count = 0                                
        setInterval(() => {            
            fadeInUp(refImg, time)                
            var randomNumber = Math.floor(Math.random() * 11 )            
            count = (count + randomNumber) % photos.length
            setPhoto3(photos[count])            
        }, time);     
        
    } 
    //---------------ANIMATIONS
    const firstFade = (node, time) => {
        var tl = gsap.timeline()
        tl.from(node, {
            duration: time * 0.00033,
            opacity: 0,
            ease: "power3.inOut"});
        tl.to(node, {
            y: -20,
            duration: time * 0.00033,
            opacity: 1,
            ease: "power3.inOut"});
        tl.to(node, {
            y: 60,
            duration: time * 0.00033,
            opacity: 0,
            ease: "power3.inOut"
        });
    }
    

    const fadeInUp = (node, time) => {
        var tl = gsap.timeline();
        tl.to(node, {
            y: -20,
            duration: time * 0.0005,
            opacity: 1,
            ease: "power3.inOut"});
        tl.to(node, {
            y: 60,
            duration: time * 0.0005,
            opacity: 0,
            ease: "power3.inOut"
        });

    };
    
    // gsap.ticker.add(fadeInUp);
    // gsap.ticker.lagSmoothing(0);    
    
    return (
        <div>
            <div className="upperImg">
                <img ref = {el => (refImg1= el)} src={photo} className="imageLeft" alt="Display Image" />
                <img ref = {el => (refImg3= el)} src={photo3} alt="Display Image" className="imageRight"/>
            </div>
            <div className="downImg">
                <img ref = {el => (refImg2= el)} src={photo2} alt="Display Image" className="imageDown"/>
            </div>
            
            
        </div>
    )
}
