import React from 'react'
import Card from '../components/Card'
import styles from '../styles/MVV.module.css'

const MVV = () => {
  return (
    <div className={styles.wrapperMision}>
        <div className={styles.columnMision}>
            <Card icon={'/img/mision.svg'} b={'0'} l={'0'}   text={'mision'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi, in pretium adipiscing at imperdiet elit imperdiet. Nulla id semper netus eu consequat vestibulum. Nisi etiam mollis metus suspendisse vulputate commodo, duis. Tincidunt non dui quis adipiscing phasellus ornare.'}/>
        </div>
        <div className={styles.columnMision}>
            <Card icon={'/img/vision.svg'} b={'0'} l={'0'}  text={'mision'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi, in pretium adipiscing at imperdiet elit imperdiet. Nulla id semper netus eu consequat vestibulum. Nisi etiam mollis metus suspendisse vulputate commodo, duis. Tincidunt non dui quis adipiscing phasellus ornare.'}/>
        </div>
        <div className={styles.columnMision}>
            <Card icon={'/img/mision.svg'} b={'0'} l={'0'}  text={'mision'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi, in pretium adipiscing at imperdiet elit imperdiet. Nulla id semper netus eu consequat vestibulum. Nisi etiam mollis metus suspendisse vulputate commodo, duis. Tincidunt non dui quis adipiscing phasellus ornare.'}/>
        </div>
        
    </div>
  )
}

export default MVV