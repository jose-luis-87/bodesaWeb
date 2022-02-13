import styles from '../styles/Hero.module.css'
import Image from "next/image"
import { H1, P } from '../components/Texts';
import Card from '../components/Card';

const Hero = () => {
  return <div className={styles.HeroWrapper}>
            <div className={styles.wrapperLeft}>
                <H1 txt={'Reconocida en 2010 como una de las mejores empresas Mexicanas'}/>
                <P themed txt={'por Delloite, Banmex e ITESM, por sus procesos de negocios, en un comparativo de gestión empresarial altamene técnico y exigete'}/> 
            </div>
            
            <div className={styles.wrapperRight}>
                <div className={styles.square}>

                </div>
                <div className={styles.squareImg}>
                    <Image className={styles.imgSquare} src="/img/heroimage.jpg" objectFit='cover' layout='fill' alt='marina'/>
                </div>
                <Card w={'28%'} icon={'/img/fundo.svg'} b={'20%'} l={'-4%'}  text={'1000'} p={'Se fundó la primera tienda departamental'} signo={'en'}/>
                <Card w={'28%'} icon={'/img/empleos.svg'}  r={'2%'} b={'2%'} text={'2000'} p={'empleos directos'} signo={'+'}/>
            </div>
            
         </div>;
};

export default Hero;

