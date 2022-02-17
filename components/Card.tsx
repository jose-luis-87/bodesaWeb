import Image from "next/image"
import useScreenSize from "../hooks/useScreenSize"
import styles from '../styles/Card.module.css'
import { P } from "./Texts"

const Card = ({t, l, r, b, w, h, text, p, signo, icon}:any)=>{
    const {width, height} = useScreenSize()
    return <div style={{top:t, left:l, right: r, bottom: b, width:w, height:h}} className={styles.wrapperCard}>
                <div className={styles.wrapperIcon}>
                    <Image src={icon} width={'100%'} height={'100%'} alt='icon'/>
                </div>
                <div className={styles.wrapperH}>
                    <h4>{signo}</h4>
                    <h1 style={{marginBottom: width >768 ? '28px' : '12px', marginTop: width >768 ? '28px' : '12px'}}>{text}</h1>
                </div>
                
                <P themed txt={p}/>
           </div>
}

export default Card