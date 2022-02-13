import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Galeria.module.css'

const Galeria = () => {

  const [lightBox, setLightBox] = useState(true)
  const [currentImg, setCurrentImg] = useState('/img/placeholder.png')

  const toggleModal = (img:any) =>{
    setLightBox(!lightBox)
    setCurrentImg(img)
  }

  return (
    <div className={styles.wrapperGaleria}>
        <h1 style={{color:'#1D4329', paddingLeft: '5%', width:'100%', marginTop: '4%'}}>Galería</h1>
        <div className={styles.containerGaleria}>
            <div className={styles.containerImg} style={{gridArea:'small'}}>
                <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='gal1'/>
                <HoverLink callBack={()=>{toggleModal('/img/heroimage.jpg')}}/>
            </div>
            <div className={styles.containerImg} style={{gridArea:'small2'}}>
                <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='gal2'/>
                <HoverLink callBack={()=>{toggleModal('/img/placeholder.png')}}/>
            </div>
            <div className={styles.containerImg} style={{gridArea:'small3'}}>
                <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='gal3'/>
                <HoverLink callBack={()=>{toggleModal('/img/placeholder.png')}}/>
            </div>
            <div className={styles.containerImg} style={{gridArea:'small4'}}>
                <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='gal4'/>
                <HoverLink callBack={()=>{toggleModal('/img/placeholder.png')}}/>
            </div>
            <div className={styles.containerImg} style={{gridArea:'side'}}>
                <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='gal5'/>
                <HoverLink callBack={()=>{toggleModal('/img/placeholder.png')}}/>
            </div>
            {lightBox&&<LightBox callBack={()=>{toggleModal('')}} img={currentImg}/>}
        </div>
    </div>
  )
}

export default Galeria

const HoverLink = ({callBack}:any) =>{
    return <div className={styles.hoverCont} onClick={callBack}>
                <div className={styles.iconCont}>
                    <Image src="/img/expand.svg" objectFit='cover' layout='fill' alt='iconHov'/>
                </div>
           </div>
}

const LightBox = ({callBack, img}:any) => {
    return <div className={styles.lightBox}>
            <div className={styles.imgCont}>
                <Image src={img} objectFit='cover' layout='fill' alt='iconHov'/>
            </div>  
            <div className={styles.closeIcon} onClick={callBack}>
                <Image src="/img/close.svg" objectFit='cover' layout='fill' alt='iconHov'/>
            </div>  
           </div>
}