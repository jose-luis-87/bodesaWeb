import Image from 'next/image';
import React from 'react';
import { H1, P } from '../components/Texts';
import styles from '../styles/Status.module.css'

const Status = () => {
  return <div className={styles.wrapperStatus}>
            <div className={styles.wrapperLeft}>
                <div className={styles.roundedImg}>
                    <Image className={styles.imgSquare} src="/img/status.jpg" objectFit='cover' layout='fill' alt='marina'/>
                </div>
            </div>
            <div className={styles.wrapperRight}>
                <H1 txt={'Estatus actual de negocios'}/>
                <P txt={''}/>
                <p>Tiendas departamentales: 6 tiendas marca La Marina con <span>42,000m2</span> y ubicadas en ciudades de al menos <span>150,000 habitantes;</span> concetradas principalmente en un segmento de mercado inmediato a alto ingreso. Ofrece <span>marcas de prestigio nacional  internacional</span></p>
            </div>
         </div>
};

export default Status;


