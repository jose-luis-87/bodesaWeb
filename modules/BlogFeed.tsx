import Image from 'next/image'
import React, { useRef } from 'react'
import styles from '../styles/BlogFeed.module.css'

const BlogFeed = () => {

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
  return (
    <div className={styles.wrapperFeed}>
        <div className={styles.carouselCont}>
                <div className={styles.arrowleft} onClick={scrollR}>
                    <Image src="/img/arrowleft.svg" objectFit='contain' layout='fill' alt="arrow-left"/>
                </div>
                <div className={styles.arrowright} onClick={scrollL}>
                    <Image src="/img/arrowleft.svg" objectFit='cover' layout='fill' alt="arrow-right"/>
                </div>
                <Carousel forwardRef={sliderRef}>
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                </Carousel>
            </div>
    </div>
  )
}

export default BlogFeed

const CardBlog = ({callBack}: any)=>{
    return <div className={styles.containerCard} onClick={callBack}>
                <div className={styles.imgCard}>
                    <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='marina'/>
                </div>
                <div className={styles.desCard}>
                    <p style={{fontWeight: '900', marginTop: '32px', fontSize: '32px'}}>Title Blog feed</p>
                    <p style={{ marginBottom: '32px'}}>Publicado por: <span>Juan García</span> | 14/01/2022</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat in nulla vestibulum pharetra. Velit egestas nec massa, imperdiet nunc tellus ridiculus placera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat in nulla vestibulum pharetra. Velit egestas nec massa, imperdiet nunc tellus ridiculus placera...</p>
                    <p style={{ marginTop: '32px', textAlign: 'right', width: '100%', color:'#2D673E', fontWeight: '900'}}>Leer más...</p>
                </div>
                
           </div>
}

const Carousel = ({children, forwardRef}:any) =>{
    return <div className={styles.carousel} ref={forwardRef}>{children}</div>
}