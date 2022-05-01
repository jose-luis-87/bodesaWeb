import React, { useEffect, useRef, useState } from 'react'
import styles from './SliderHero.module.css'
import Hero from '../../modules/Hero'

const SliderHero = ({forwardRef}:any) => {
  
  let sliderRef = useRef<any>()
  
  const [actualid, setActualId] = useState(0)
  const [lastid, setLastlId] = useState(0)
  const [count, setCount] = useState(0);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollTo = (i:any) =>{
      
        bulletSwitch(i)
        setActualId(i)
      

  }
  
  
  const bulletSwitch =(actualid:any)=>{
    let bullet1 = document.getElementById('bullet1')
    let bullet2 = document.getElementById('bullet2')
    let bullet3 = document.getElementById('bullet3')
    switch (actualid) {
        case 0:
            sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth * 2
            bullet1!.style.backgroundColor = '#364a5a'
            bullet2!.style.backgroundColor = ''
            bullet3!.style.backgroundColor = ''
            break;
        case 1:
            bullet1!.style.backgroundColor = ''
            bullet2!.style.backgroundColor = '#364a5a'
            bullet3!.style.backgroundColor = ''
            if(lastid === 2){
                sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth 
            } else {
                sliderRef.current.scrollLeft += sliderRef.current.offsetWidth 
            }
            break;
        case 2:
            sliderRef.current.scrollLeft += sliderRef.current.offsetWidth * 2
            bullet1!.style.backgroundColor = ''
            bullet2!.style.backgroundColor = ''
            bullet3!.style.backgroundColor = '#364a5a'
            break;
        default:
            break;
    }
  }
  useEffect(() => {
      
   
    scrollTo(count)

    if(count === 3){
        setCount(0)
    }else{
        setTimeout(() => setCount(count + 1), 8000)
    }
    
  }, [count, scrollTo])
  
  useEffect(() => {
    setLastlId(actualid)
  }, [actualid])
  
  return (
    <div ref={forwardRef} className={styles.carouselCont}>
        <Bullets scrollTo={scrollTo} />
        <Carousel forwardRef={sliderRef}>
            <Slide>
                <Hero/>
            </Slide>
            <Slide>
                <p>Slide2</p>
            </Slide>
            <Slide>
                <p>Slide3</p>
            </Slide>
        </Carousel>
    </div>
  )
}

export default SliderHero

const Carousel = ({children, forwardRef}:any) =>{
    return <div ref={forwardRef} className={styles.carousel}>{children}</div>
}

const Slide = ({children}:any) =>{
    
    return <div className={styles.containerSlide}>
                {children}
            </div>
}

const Bullets = ({scrollTo}:any) =>{
    let list = ['1','2', '3']
    return <div className={styles.bullets}>
                {
                    list.map((bullet, i)=>(
                        <div 
                            id={`bullet${bullet}`}
                            key={`bullet ${bullet}`}
                            className={styles.bullet} 
                            onClick={()=>scrollTo(i)}
                        ></div>
                    ))
                }
           </div>
}