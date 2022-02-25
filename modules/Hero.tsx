import styles from '../styles/Hero.module.css'
import Image from "next/image"
import { H1, P } from '../components/Texts';
import Card from '../components/Card';
import useScreenSize from '../hooks/useScreenSize';
import { useEffect, useState } from 'react';

const Hero = () => {

  const {width, height} = useScreenSize()

  return <div  className={styles.HeroWrapper}>
            <div className={styles.wrapperLeft}>
                <H1 txt={'Reconocida en 2010 como una de las mejores empresas Mexicanas'}/>
                <P themed txt={'por Delloite, Banmex e ITESM, por sus procesos de negocios, en un comparativo de gestión empresarial altamene técnico y exigete'}/> 
            </div>
            
            <div className={styles.wrapperRight}>
                <div className={styles.square}></div>
                <div className={styles.squareImg}>
                    <Image className={styles.imgSquare} src="/img/heroimg.jpg" objectFit='cover' layout='fill' alt='marina'/>
                </div>
                <Card w={width >768 ? '28%' : '32%'} icon={'/img/fundo.svg'} b={width >768 ? '20%': '10%'} l={width >768 ? '-4%' : '4%'}  text={'1000'} p={'Se fundó la primera tienda departamental'} signo={'en'}/>
                <Card w={width >768 ? '28%' : '32%'} icon={'/img/empleos.svg'}  r={'2%'} b={'2%'} text={'2000'} p={'empleos directos'} signo={'+'}/>
            </div>
            
         </div>;
};

export default Hero;

