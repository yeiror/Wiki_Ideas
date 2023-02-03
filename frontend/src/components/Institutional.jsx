import React, {useEffect, useState} from "react";
/**
 * Component de información institucional con efecto fadeout
 * Para modificar el estilo sin hover o buttons, tomo el window.scroll y uso un useState para cambiar los estilos en línea
 * El hook useEffect toma el evento y si es superior a cierto nro cambia el estado de true a false 
 * no me fue posible aplicar display none para subir el elemento que le sigue
 * @returns 
 */
export default function Institutional() {

  let [onScreen, setOnScreen]= useState(true)
  

  useEffect(()=>{
     const visible=()=>{
      if(window.scrollY> 5){

        setOnScreen(false)
         
      } else {
        setOnScreen(true)
      }
    
     }
     window.addEventListener('scroll', visible)

     

    return () => {
      window.removeEventListener('scroll', visible)
    }
  }, [])

  return (
    
    <section className="institutional" style={{opacity: onScreen ? 1 : 0,
      translate: onScreen ? "none" : "0 1rem",
      transition: "300ms ease-out",
      transitionDuration: '1s',}}>
      <h1>Bienvenidos a WIKI IDEAS</h1>
      <p>
        Les damos la bienvenida a WIKIDEAS. Aquí vas a poder encontrar todos los
        temas que necesites, para tu trabajo, universidad, colegio o simplemente
        despejar cualquier duda!!
      </p>
      <p>
        La idea es crear un espacio colaborativo, en la que todos puedan ser
        participes, así podremos seguir creciendo y avanzando como comunidad
      </p>
    </section>
  );
}
