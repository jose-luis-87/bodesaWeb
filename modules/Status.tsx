import Image from 'next/image';
import React from 'react';
import { H1, P } from '../components/Texts';
import styles from '../styles/Status.module.css'

const Status = () => {
  return <div className={styles.wrapperStatus}>
            <div className={styles.wrapperLeft}>
                <div className={styles.roundedImg}>
                    <Image className={styles.imgSquare} src="/img/statusimg.jpg" objectFit='cover' layout='fill' alt='marina'/>
                </div>
                <CardStatus/>
            </div>
            <div className={styles.wrapperRight}>
                <h1 className={styles.titleStatus}>Estatus actual de negocios</h1>
                <P txt={''}/>
                <p className={styles.txtStatus}>Tiendas departamentales: 6 tiendas marca La Marina con <span>42,000m2</span> y ubicadas en ciudades de al menos <span>150,000 habitantes;</span> concetradas principalmente en un segmento de mercado inmediato a alto ingreso. Ofrece <span>marcas de prestigio nacional  internacional</span></p>
            </div>
         </div>
};

export default Status;


const CardStatus = () =>{
    return <div className={styles.wrapperCard}>
             <div className={styles.iconCard}>
                <Image className={styles.imgSquare} src="/img/marcas.png" objectFit='contain' layout='fill' alt='marcas'/>
             </div>
             <div className={styles.milestone}>
                <H1 txt={'6'}/>
                <P txt={'marcas'} themed/>
             </div>
             <div className={styles.milestone}>
                <H1 txt={'4'}/>
                <P txt={'estados'} themed/>
             </div>
           </div>
}