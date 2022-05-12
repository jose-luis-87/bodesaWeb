import Image from 'next/image';
import React from 'react';
import { H1, P } from '../components/Texts';
import styles from '../styles/Status.module.css'

const Status = ({forwardRef}:any) => {

  return <div className={styles.wrapperStatus} ref={forwardRef}>
            <div className={styles.wrapperLeft}>
                <div className={styles.roundedImg}>
                    <Image className={styles.imgSquare} src="/img/statusimg.jpg" objectFit='contain' width={'500px'}  height={'500px'} alt='marina'/>
                </div>
                <CardStatus/>
            </div>
            <div className={styles.wrapperRight}>
                <h1 className={styles.titleStatus}>Quiénes Somos</h1>
                <P txt={''}/>
                <p className={styles.txtStatus}>Bodesa fundó en 1887 su primera tienda departamental La Marina en la Ciudad de Colima, ofreciendo moda y estilo de vida para toda la familia y el hogar, donde los consumidores pueden encontrar marcas de prestigio nacional e internacional. </p>
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