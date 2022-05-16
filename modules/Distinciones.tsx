import React from 'react'
import Image from 'next/image'
import styles from '../styles/Distinciones.module.css'

const Distinciones = ({forwardRef}:any) => {
  return (
    <div className={styles.distinciones} ref={forwardRef}>
        <div className={styles.logosDist}>
                <div className={styles.imgDist}>
                    <Image src="/img/lmem.png" objectFit='contain' layout='fill' alt="lmem"/>
               </div>
               <div className={styles.imgDist}>
                    <Image src="/img/esr.png" objectFit='contain' layout='fill' alt="esr"/>
               </div>
               <div className={styles.imgDist}>
                    <Image src="/img/gptw.png" objectFit='contain' layout='fill' alt="gptw"/>
               </div>
        </div>
        <div className={styles.txtDist}>
         <p> Reconocida en el 2010 como una de las Mejores Empresas Mexicanas por Deloitte, Banamex e ITESM, por sus procesos de negocios, en un comparativo de gestión empresarial altamente técnico y exigente.<br/><br/>En 2013 La Marina y El Bodegón miembro de las Empresas Modelo reconocida por Forbes México.<br/><br/>Reconocida como Empresa Socialmente Responsable en el 2018 y nombrada recientemente por Great Place to Works. 2020-2022.<br/><br/>Desde 2017 fue calificada por Fintech Ratings como empresa tipo “A” y en 2021 como “A+”

         </p>

        </div>

    </div>
  )
}

export default Distinciones