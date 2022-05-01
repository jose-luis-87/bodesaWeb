import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import { useContext, useEffect, useState } from "react"
import { NavContext } from "../context/NavContext"

const Header = () => {
  
  const [scrolling, setScrolling] = useState(false)
  const [actualScroll, setActualScroll] = useState(0)
  const [, setSection] = useContext(NavContext)

  useEffect(() => {
    window.onscroll = ()=>{
        let y = window.scrollY
        
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
            <div style={{ boxShadow: scrolling ?' 0px 8px 16px -12px #364a5a' : '', transition: 'all 0.5s ease-in-out'}}  className={styles.HeaderWrapper}>
                <div className={styles.containerLogo}>
                    <div className={styles.logoHeader}>
                        <Link href='/'>
                            <a>
                            <Image src="/img/logo_bodesa.png" objectFit="contain" layout="fill" alt="logo"/>  
                            </a>
                            
                        </Link>
                    </div> 
                    <nav className={styles.navigate}>
                        <div className={styles.itemNav}>
                            <Link href='/' >Inicio</Link>
                        </div>
                        <div className={styles.itemNav}>
                            <p onClick={()=>setSection(1)}>Nuestro impacto</p>
                        </div>
                        <div className={styles.itemNav}>
                            <p onClick={()=>setSection(2)}>Nuestras marcas</p>
                        </div>
                        <div className={styles.itemNav}>
                            <Link href='/blog'>Blog</Link>
                        </div>
                        <div className={styles.itemNav}>
                            <Link href='/prensa'>Prensa</Link>
                        </div>
                    </nav>
                    
                </div>
                
               
            </div>
        </header>
}

export default Header
