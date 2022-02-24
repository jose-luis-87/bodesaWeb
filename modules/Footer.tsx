import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
        <div className={styles.columnFooter}>
            <h3 className={styles.titleSection}>Nuestro impacto</h3>
            <p className={styles.txtFooter}>Impacto en la comunidad</p>
            <p className={styles.txtFooter}>Sustentabilidad ambiental</p>
            <p className={styles.txtFooter}>Prensa</p>
            <p className={styles.txtFooter}>Integridad corporativa</p>
        </div>
        <div className={styles.columnFooter}>
            <h3 className={styles.titleSection}>Contacto</h3>
            <div className={styles.contactItem}>
                <div className={styles.IconCont}>
                    <Image src="/img/mail.svg" objectFit='contain' layout='fill' alt="mail"/>
                </div>
                <div className={styles.txtItem}>
                    <p className={styles.txtFooter}>info@bodesasapi.com</p>
                </div>
            </div>
            <div className={styles.contactItem}>
                <div className={styles.IconCont}>
                    <Image src="/img/cel.svg" objectFit='contain' layout='fill' alt="cel"/>
                </div>
                <div className={styles.txtItem}>
                    <p className={styles.txtFooter}>+52 55 5555 5555</p>
                </div>
            </div>
            <div className={styles.contactItem}>
                <div className={styles.IconCont}>
                    <Image src="/img/icon-linkedIn.svg" objectFit='contain' layout='fill' alt="cel"/>
                </div>
                <div className={styles.txtItem}>
                    <p className={styles.txtFooter}>síguenos en LinkedIn</p>
                </div>
            </div>
            
            <p className={styles.privacidad}>Aviso de privacidad</p>
        </div>
        <div className={styles.columnFooter}>
            <div className={styles.logoBodesa}>
               <Image src="/img/LogoBodesaW.svg" objectFit='contain' layout='fill' alt="logo-footer"/> 
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
  )
}

export default Footer