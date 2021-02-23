import React, {useState, useEffect, useRef} from 'react'
import gsap, { Ease } from 'gsap'
import img1 from '../images/imagenGarin1.jpg'
import img2 from '../images/imagenGarin2.jpeg'
import img4 from '../images/imagenGarin4.jpg'
import img5 from '../images/imagenGarin5.jpg'
import img7 from '../images/imagenGarin7.png'
import img8 from '../images/imagenGarin8.jpeg'
import img9 from '../images/imagenGarin9.jpeg'
import img10 from '../images/imagenGarin10.jpeg'
import img11 from '../images/imagenGarin11.jpeg'
import img12 from '../images/imagenGarin12.jpeg'
import img13 from '../images/imagenGarin13.jpeg'
import img14 from '../images/imagenGarin14.jpg'
import img15 from '../images/imagenGarin15.jpg'

export default function Pictures() {
    const [photo, setPhoto] = useState(img1);
    const [changed, setChanged] = useState(false)
    let photos = [img1, img2, img4, img5, img7, img8, img9, img10, img11, img12, img13, img14, img15]
    
    let heroImg = useRef(null)

    useEffect(() => {    
        changePhoto()
        fadeInUp(heroImg)
    }, [changed])

    const changePhoto = () => {          
        var count = 0        
        setTimeout(() => {
            var randomNumber = Math.floor(Math.random() * 11 )            
            count = (count + randomNumber) % photos.length
            setPhoto(photos[count])
            setChanged(!changed)
        }, 3000);         
    }    
    const fadeInUp = node => {
        gsap.from(node, {
            y: 60,
            duration: 2,
            delay: 0.2,
            opacity: 0,
            ease: "power3.inOut"
        });
    };
    
    return (
        <div>
            <img ref = {el => (heroImg= el)} src={photo} alt="Logo" />
        </div>
    )
}
