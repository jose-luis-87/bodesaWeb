import styles from '../styles/Hero.module.css'
import Image from "next/image"
import { H1, P } from '../components/Texts';
import Card from '../components/Card';
import useScreenSize from '../hooks/useScreenSize';
import { useEffect, useState } from 'react';

export const HeroUno = ({forwardRef}:any) => {

  const {width, height} = useScreenSize()

  return <div  className={styles.HeroWrapper} ref={forwardRef}>
            
            
            <div className={styles.wrapperRight}>
                <div className={styles.square2}></div>
                <div className={styles.squareImg2}>
                    <Image className={styles.imgSquare} src="/img/statusimg.jpg" objectFit='cover' layout='fill' alt='marina'/>
                </div>
                {/* <Card w={width >768 ? '28%' : '32%'} icon={'/img/fundo.svg'} b={width >768 ? '20%': '10%'} l={width >768 ? '-4%' : '4%'}  text={'1000'} p={'Se fundó la primera tienda departamental'} signo={'en'}/>
                <Card w={width >768 ? '28%' : '32%'} icon={'/img/empleos.svg'}  r={'2%'} b={'2%'} text={'2000'} p={'empleos directos'} signo={'+'}/> */}
            </div>
            <div className={styles.wrapperLeft}>
                <H1 txt={'Reconocida en 2010 como una de las mejores empresas Mexicanas'}/>
                <P themed txt={'por Delloite, Banmex e ITESM, por sus procesos de negocios, en un comparativo de gestión empresarial altamente técnico.'}/> 
            </div>
            
         </div>;
};

export const HeroDos = ({forwardRef}:any) => {

    const {width, height} = useScreenSize()
  
    return <div  className={styles.HeroWrapper} ref={forwardRef}>
              <div className={styles.wrapperLeft} style={{textAlign: 'right'}}>
                  <H1 txt={'135 años Innovando'} />
                  {/* <P themed txt={'por Delloite, Banmex e ITESM, por sus procesos de negocios, en un comparativo de gestión empresarial altamente técnico.'}/>  */}
              </div>
              
              <div className={styles.wrapperRight}>
                  <div className={styles.square}></div>
                  <div className={styles.squareImg}>
                      <Image className={styles.imgSquare} src="/img/heroimg.jpg" objectFit='cover' layout='fill' alt='marina'/>
                  </div>
                  {/* <Card w={width >768 ? '28%' : '32%'} icon={'/img/fundo.svg'} b={width >768 ? '20%': '10%'} l={width >768 ? '-4%' : '4%'}  text={'1000'} p={'Se fundó la primera tienda departamental'} signo={'en'}/>
                  <Card w={width >768 ? '28%' : '32%'} icon={'/img/empleos.svg'}  r={'2%'} b={'2%'} text={'2000'} p={'empleos directos'} signo={'+'}/> */}
              </div>
              
           </div>;
};

export const HeroTres= ({forwardRef}:any) => {

    const {width, height} = useScreenSize()
  
    return <div  className={styles.HeroWrapperTres} ref={forwardRef}>
              
              <Image className={styles.imgSquare} src="/img/hero-3.png" objectFit='cover' layout='fill' alt='marina'/>
              
              
           </div>;
  };