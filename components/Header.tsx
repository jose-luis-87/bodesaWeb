import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'

const Header = () => {
  return <header>
            <div className={styles.HeaderWrapper}>
                <div className={styles.logoHeader}>
                    <Link href='/' passHref>
                        <Image src="/img/logoBodesa.svg" width={200} height={100} alt="logo"/>
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
                        <Link href='/innovacion'>Blog</Link>
                    </div>
                    <div>
                        <Link href='/prensa'>Prensa</Link>
                    </div>
                </nav>
            </div>
        </header>
}

export default Header
