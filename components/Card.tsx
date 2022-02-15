import Image from "next/image"
import styles from '../styles/Card.module.css'
import { P } from "./Texts"

const Card = ({t, l, r, b, w, h, text, p, signo, icon}:any)=>{
    return <div style={{top:t, left:l, right: r, bottom: b, width:w, height:h}} className={styles.wrapperCard}>
                <div className={styles.wrapperIcon}>
                    <Image src={icon} width={'100%'} height={'100%'} alt='icon'/>
                </div>
                <div className={styles.wrapperH}>
                    <h4>{signo}</h4>
                    <h1 style={{marginBottom: '28px', marginTop: '28px'}}>{text}</h1>
                </div>
                
                <P themed txt={p}/>
           </div>
}

export default Card