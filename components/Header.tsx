import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import { useEffect, useState } from "react"
import useScreenSize from "../hooks/useScreenSize"

const Header = () => {
  
  const [scrolling, setScrolling] = useState(false)
  const [actualScroll, setActualScroll] = useState(0)

  useEffect(() => {
    window.onscroll = ()=>{
        let y = window.scrollY
        console.log(scrolling);
        console.log(y);
        setActualScroll(y)
        if( actualScroll !== 0 ){
            setScrolling(true)
        }
        setTimeout(()=>{
            setScrolling(false)
        }, 3000)
        return ()=>{
            clearTimeout()
        }
    }
  
   
  }, [actualScroll, scrolling])
    
  return <header>
            <div style={{ boxShadow: scrolling ?' 0px 8px 16px -12px #005200' : '', transition: 'all 0.5s ease-in-out'}}  className={styles.HeaderWrapper}>
                <div className={styles.containerLogo}>
                    <div className={styles.logoHeader}>
                        <Link href='/'>
                            <a>
                            <Image src="/img/logoBodesa.svg" objectFit="contain" layout="fill" alt="logo"/>  
                            </a>
                            
                        </Link>
                    </div> 
                    <div className={styles.contactItem}>
                        <div className={styles.IconCont}>
                            <Image src="/img/cel.svg" objectFit='contain' layout='fill' alt="cel"/>
                        </div>
                        <div className={styles.txtItem}>
                            <Link href='/contactanos' >
                                <p className={styles.txtCont}>Contáctanos</p>
                            </Link>
                        </div>
                    </div> 
                </div>
                
                <nav className={styles.navigate}>
                    <div>
                        <Link href='/'>Inicio</Link>
                    </div>
                    <div>
                        <p>Nosotros</p>
                    </div>
                    <div>
                        <p>Nuestro impacto</p>
                    </div>
                    <div>
                        <p>Nuestras marcas</p>
                    </div>
                    <div>
                        <Link href='/blog'>Blog</Link>
                    </div>
                    <div>
                        <Link href='/prensa'>Prensa</Link>
                    </div>
                </nav>
            </div>
        </header>
}

export default Header
