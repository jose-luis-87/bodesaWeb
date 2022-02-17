import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import useScreenSize from '../hooks/useScreenSize'
import styles from '../styles/BlogFeed.module.css'

const BlogFeed = () => {

    
    let sliderRef = useRef<any>()
    
    const {width, height} = useScreenSize()
     console.log(width);
     
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
                    <CardBlog  himg={ '40%'} img={'/img/galeria.jpg'}/>
                    <CardBlog  himg={ '40%'} img={'/img/galeria-02.jpg'}/>
                    <CardBlog  himg={ '40%'} img={'/img/galeria-03.jpg'}/>
                    <CardBlog  himg={ '40%'} img={'/img/galeria-04.jpg'}/>
                    <CardBlog  himg={ '40%'} img={'/img/galeria-05.jpg'}/>
                    <CardBlog  himg={ '40%'} img={'/img/galeria-06.jpg'}/>
                </Carousel>
            </div>
    </div>
  )
}

export default BlogFeed

export const CardBlog = ({callBack, w, f, himg, img}: any)=>{

    const router = useRouter()

    return <div style={{width: w, flex: f}} className={styles.containerCard} onClick={callBack}>
                <div style={{height: himg}} className={styles.imgCard}>
                    <Link href={`/post/name-blog`} passHref>
                        <Image  src={img}objectFit='cover' layout='fill' alt='marina'/>
                    </Link>
                </div>
                <div className={styles.desCard}>
                    <Link href={`/post/name-blog`} passHref>
                        <p style={{fontWeight: '900', marginTop: '32px', fontSize: '32px', cursor: 'pointer'}}>Title Blog feed</p>
                    </Link>
                    <p style={{ marginBottom: '32px'}}>Publicado por: <span>Juan García</span> | 14/01/2022</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat in nulla vestibulum pharetra. Velit egestas nec massa, imperdiet nunc tellus ridiculus placera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat in nulla vestibulum pharetra. Velit egestas nec massa, imperdiet nunc tellus ridiculus placera...</p>
                    <Link href={`/post/name-blog`} passHref>
                        <p style={{ marginTop: '32px', textAlign: 'right', width: '100%', color:'#2D673E', fontWeight: '900', cursor: 'pointer'}}>Leer más...</p>
                    </Link>
                </div>
           </div>
}

const Carousel = ({children, forwardRef}:any) =>{
    return <div className={styles.carousel} ref={forwardRef}>{children}</div>
}