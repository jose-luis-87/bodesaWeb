import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'

const Header = () => {
  return <header>
            <div className={styles.HeaderWrapper}>
                <div className={styles.logoHeader}>
                    <Link href='/'>
                        <a>
                          <Image src="/img/logoBodesa.svg" width={180} height={60} alt="logo"/>  
                        </a>
                        
                    </Link>
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
