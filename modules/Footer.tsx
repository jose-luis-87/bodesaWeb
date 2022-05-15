import Image from 'next/image'
import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  const [, setSection] = useContext(NavContext)

  return (
     
    <div className={styles.footer}>
        <div className={styles.wrapperFooter}>
        <div className={styles.columnFooter}>
            <h3 className={styles.titleSection}>Empresa</h3>
            <p className={styles.txtFooter} onClick={()=>setSection(1)}>¿Quiénes somos?</p>
            <p className={styles.txtFooter}>Nuestra Historia</p>
            <p className={styles.txtFooter}>Principios y valores</p>
            <p className={styles.txtFooter}>Unidades de negocio</p>
            <p className={styles.txtFooter}>¿Quieres ser Proveedor?</p>
            <p className={styles.txtFooter}>Prensa</p>
        </div>
        <div className={styles.columnFooter}>
            <h3 className={styles.titleSection}>Nuestro impacto</h3>
            <p className={styles.txtFooter}>Impacto en la comunidad</p>
            <p className={styles.txtFooter}>Sustentabilidad ambiental</p>
        </div>
        <div className={styles.columnFooter}>
            <h3 className={styles.titleSection}>Contacto</h3>
            <div className={styles.contactItem}>
                <div className={styles.IconCont}>
                    <Image src="/img/mail.svg" objectFit='contain' layout='fill' alt="mail"/>
                </div>
                <div className={styles.txtItem}>
                    <p className={styles.txtFooter}>contactoenlinea@bodesa.com.mx</p>
                </div>
            </div>
            <div className={styles.contactItem}>
                <div className={styles.IconCont}>
                    <Image src="/img/cel.svg" objectFit='contain' layout='fill' alt="cel"/>
                </div>
                <div className={styles.txtItem}>
                    <p className={styles.txtFooter}>+52 312 316 5300</p>
                </div>
            </div>
            <div className={styles.contactItem}>
                <div className={styles.IconCont}>
                    <Image src="/img/icon-linkedIn.svg" objectFit='contain' layout='fill' alt="cel"/>
                </div>
                <div className={styles.txtItem}>
                    <a href="https://www.linkedin.com/company/bodesa-sapi-de-cv/mycompany/">
                       <p className={styles.txtFooter}>síguenos en LinkedIn</p> 
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.columnFooter}>
            <div className={styles.logoBodesa}>
               <Image src="/img/logo_bodesa.png" objectFit='contain' layout='fill' alt="logo-footer"/> 
            </div>
           <div className={styles.logos}>
               <div className={styles.logoFooter}>
                    <Image src="/img/lmem.png" objectFit='contain' layout='fill' alt="lmem"/>
               </div>
               <div className={styles.logoFooter}>
                    <Image src="/img/esr.png" objectFit='contain' layout='fill' alt="esr"/>
               </div>
               <div className={styles.logoFooter}>
                    <Image src="/img/gptw.png" objectFit='contain' layout='fill' alt="gptw"/>
               </div>
           </div>
        </div>
        </div>
        <p className={styles.privacidad}>Aviso de privacidad</p>
    </div>
    
    
  )
}

export default Footer