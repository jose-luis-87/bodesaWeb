import Image from 'next/image';
import { useRef } from 'react';
import styles from '../styles/Marcas.module.css';

const Marcas = ({forwardRef}:any) => {

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

  return <div className={styles.wrapperMarcas} ref={forwardRef}>
            <h1 className={styles.titleMarca}>Nuestras Marcas</h1>
            <div className={styles.carouselCont}>
                <div className={styles.snapper} ></div>
                <div className={styles.arrowleft} onClick={scrollR}>
                    <Image src="/img/arrowleft.svg" objectFit='contain' layout='fill' alt="arrow-left"/>
                </div>
                <div className={styles.arrowright} onClick={scrollL}>
                    <Image src="/img/arrowleft.svg" objectFit='contain' layout='fill' alt="arrow-right"/>
                </div>
                <Carousel forwardRef={sliderRef}>
                    <Brand img={'/img/logo_135_marina.png'} txt={'Cadena de tiendas departamentales que nace en el estado de Colima con 135 años de presencia. Actualmente cuenta con 6 tiendas con más de 42,000 m2 ubicadas en Jalisco, Michoacán, Guanajuato y Colima. Atiende la demanda de las poblaciones con gran variedad de productos de alta calidad para el hogar y moda para toda la familia.'}/>
                    <Brand img={'/img/logo-bodegon.png'} txt={'Tienda que brinda el mejor surtido de la región, facilitando el bienestar del hogar y de la familia con los mejores productos y el crédito más accesible. Nace en septiembre de 1998 en el estado de Colima y actualmente cuenta con más de 85 sucursales en los estados de Colima, Jalisco, Michoacán, Nayarit y Guanajuato.'}/>
                    <Brand img={'/img/logo-naveri.png'} txt={'Tienda estilo boutique que nace en el 2004 en la ciudad de Zamora Michoacán, enfocada en moda y tecnología para adultos jóvenes pendientes de tendencias, ofreciendo las mejores marcas con facilidades de pago. Actualmente cuenta con catálogo de sobre pedido en artículos para el hogar.'}/>
                    <Brand img={'/img/celerity-logo.png'} txt={'Tienda Distribuidor Autorizado Telcel que busca conectar a las personas, ofreciendo los modelos de smartphones más buscados con los mejores precios. Actualmente contamos con 5 sucursales en el estado de Colima con presencia en los municipios de: Colima, Villa de Álvarez y Tecomán.'}/>
                    <Brand img={'/img/logomxl.png'} txt={'Tienda outlet nacida en 2020 en la ciudad de Tlaquepaque, Jalisco con mercancía de marcas reconocidas en ropa, calzado, accesorios, tecnología y artículos para el hogar con precios  reducidos y descuentos permanentes.'}/>
                    <Brand img={'/img/logo-progresa.png'} txt={'Es una sociedad financiera popular autorizada por la Comisión Nacional Bancaria de Valores, nacida en 1999 en Acámbaro, Guanajuato. Actualmente cuenta con 11 sucursales ubicadas en Guanajuato, Jalisco y Colima. Ofrece productos financieros de captación para ahorro e inversión a plazo fijo y de colocación de crédito comercial y de consumo, todos con las características que le permite la regulación aplicable emitida por la CNBV.'}/>
                </Carousel>
            </div>
         </div>
};

export default Marcas;

const Brand = ({callBack, img, txt}: any)=>{
    return <div className={styles.containerBrand} onClick={callBack}>
                <div className={styles.imgBrand}>
                    <Image  src={img} objectFit='contain' layout='fill' alt='marina'/>
                </div>
                <div className={styles.desBrand}>
                    <p style={{fontSize:'12px'}}>{txt}</p>
                </div>
                
           </div>
}

const Carousel = ({children, forwardRef}:any) =>{
    return <div className={styles.carousel} ref={forwardRef}>{children}</div>
}