import Image from 'next/image';
import { useRef } from 'react';
import styles from '../styles/Marcas.module.css';

const Marcas = () => {

let sliderRef = useRef<any>()

 const scrollL = () =>{
    
     console.log(sliderRef);
     if(sliderRef.current !== undefined){
         sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
     }
     
     
 }
 const scrollR = () =>{
    
    console.log(sliderRef);
    if(sliderRef.current !== undefined){
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
    
    
}

  return <div className={styles.wrapperMarcas}>
            <div className={styles.carouselCont}>
                <div className={styles.snapper} ></div>
                <div className={styles.arrowleft} onClick={scrollR}>
                    <Image src="/img/arrowleft.svg" objectFit='contain' layout='fill' alt="arrow-left"/>
                </div>
                <div className={styles.arrowright} onClick={scrollL}>
                    <Image src="/img/arrowleft.svg" objectFit='contain' layout='fill' alt="arrow-right"/>
                </div>
                <Carousel forwardRef={sliderRef}>
                    <Brand callBack={()=>{scrollL()}} />
                    <Brand/>
                    <Brand/>
                    <Brand/>
                    <Brand/>
                    <Brand callBack={()=>{scrollR()}}/>
                </Carousel>
            </div>
            
         </div>
};

export default Marcas;

const Brand = ({callBack}: any)=>{
    return <div className={styles.containerBrand} onClick={callBack}>
                <div className={styles.imgBrand}>
                    <Image  src="/img/LogoBodesa.svg" objectFit='contain' layout='fill' alt='marina'/>
                </div>
                <div className={styles.desBrand}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat in nulla vestibulum pharetra. Velit egestas nec massa, imperdiet nunc tellus ridiculus placera.</p>
                </div>
                
           </div>
}

const Carousel = ({children, forwardRef}:any) =>{
    return <div className={styles.carousel} ref={forwardRef}>{children}</div>
}