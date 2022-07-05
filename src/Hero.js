import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return( 
    <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1> Infraestructura por Internet</h1>
        <p>Millones de compañias de todos los tamaños desde Startups hasta las mejores 500 según Fortune usan Stripe software y sus Apis para aceptar pagos, enviar dinero y manejar sus negocios en linea</p>
        <button className='btn'>Empieza Ahora</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt='phone'/> 

      </article>

    </div>
    


  </section>
)}

export default Hero
