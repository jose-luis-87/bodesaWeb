import React from 'react'
import Card from '../components/Card'
import styles from '../styles/MVV.module.css'

const MVV = () => {
  return (
    <div className={styles.wrapperMision}>
        <div className={styles.columnMision}>
            <Card icon={'/img/mision.svg'} b={'0'} l={'0'} text={'Misión'} p={'Tenemos la pasión por innovar para servir y satisfacer con excelencia las necesidades del cliente. Ofrecemos experiencias que generan emociones con productos de calidad y servicios financieros competitivos, fomentando desarrollo y prosperidad.'}/>
        </div>
        <div className={styles.columnMision}>
            <Card icon={'/img/vision.svg'} b={'0'} l={'0'}  text={'Visión'} p={'Ser líderes en entender y satisfacer las necesidades del mercado, convirtiéndonos en la mejor tienda omnicanal de México. '}/>
        </div>
        <div className={styles.columnMision}>
            <Card icon={'/img/valores.svg'} b={'0'} l={'0'}  text={'Valores'} p={'•	Honestidad •Respeto •Compromiso •Confianza •Disciplina  •Perseverancia  •Lealtad  •Productividad •Innovación'}/>
        </div>
        
    </div>
  )
}

export default MVV