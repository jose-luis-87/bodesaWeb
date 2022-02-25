import Image from 'next/image'
import React from 'react'
import styles from '../styles/OptionMotive.module.css'

const OptionMotive = ({txt, iconB, iconBL, iconA, active, callback, type}: any) => {
  return (
    <div className={styles.wrapperOption} style={{backgroundColor: active&&'#1D4329'}} onClick={()=>callback(type)}>
        <div className={styles.iconTxt}>
          <div className={styles.beforeIcon}>
            {
               active ? <Image src={iconBL} alt='before-icon' objectFit='contain' layout='fill'/> :
                        <Image src={iconB} alt='before-icon' objectFit='contain' layout='fill'/>
            }
          </div>
          <p style={{color: active ?'#ffffff' : '#1D4329'}} className={styles.txt}>{txt}</p>  
        </div>
        <div className={styles.afterIcon}>
            <Image src={iconA} alt='after-icon' objectFit='contain' layout='fill'/>
          </div>
    </div>
  )
}

export default OptionMotive