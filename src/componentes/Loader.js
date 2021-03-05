import React, {useEffect} from 'react'
// import './../styles/components/_loader.scss';


export default function Loader() {

    useEffect(() => {

        window.onload = function(){
            document.querySelector(".loader").style.opacity = "0";
            setTimeout(function(){
              document.querySelector(".loader").style.display = "none";
            },1000);
        }
      
    },[])


    return (
        <div className="loader">
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
