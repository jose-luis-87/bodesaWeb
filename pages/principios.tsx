import React from 'react'
import styles from '../styles/Principios.module.css'
import Layout from '../components/Layout'
import Distinciones from '../modules/Distinciones'
import Galeria from '../modules/Galeria'
import Marcas from '../modules/Marcas'
import Image from 'next/image'

const principios = () => {
  return (
    <Layout pagina={'principios'}>
        {/* <Hero forwardRef={refHero}/> */}
        <div className={styles.imgPost}>
              <Image  src="/img/heroimg.jpg" objectFit='cover' layout='fill' alt='postImage'/>
        </div>
        <p style={{margin: '100px auto', width:'80%', textAlign: 'center'}}>Bodesa fundó en 1887 su primera tienda departamental La Marina en la Ciudad de Colima, ofreciendo moda y estilo de vida para toda la familia y el hogar, donde los consumidores pueden encontrar marcas de prestigio nacional e internacional.
        </p>
        <Distinciones />
        <Marcas />
        <Galeria />
        <div className={styles.valores}>
            <p><strong>Principios y Valores</strong><br/><br/><strong>Misión</strong><br/><br/>Tenemos la pasión por innovar para servir y satisfacer con excelencia las necesidades del cliente. Ofrecemos experiencias que generan emociones con productos de calidad y servicios financieros competitivos, fomentando desarrollo y prosperidad.<br/><br/><strong>Visión</strong><br/><br/>Ser líderes en entender y satisfacer las necesidades del mercado, convirtiéndonos en la mejor tienda omnicanal de México.<br/><br/>Valores:</p>
            <ul>
                <li><strong>Honestidad</strong><br/>Ser Justos, rectos y transparentes. </li><br/>
                <li><strong>Respeto</strong><br/>Cuidar nuestro entorno y tratar a cada persona como la más importante.</li><br/>
                <li><strong>Compromiso</strong><br/>Cumple tu palabra.</li><br/>
                <li><strong>Confianza</strong><br/>Generar certidumbre a otras personas con nuestra forma de actuar.</li><br/>
                <li><strong>Disciplina</strong><br/>Capacidad para adoptar y mantener buenos hábitos.</li><br/>
                <li><strong>Perseverancia</strong><br/>No rendirse aún cuando las circunstancias sean adversas.</li><br/>
                <li><strong>Lealtad</strong><br/>Sentimiento recíproco de gratitud y fidelidad.</li><br/>
                <li><strong>Productividad</strong><br/>Utilizar los recursos (tiempo, talento, activos y monetarios) con responsabilidad.</li><br/>
                <li><strong>Innovación</strong><br/>Creatividad con implementación.</li><br/>
            </ul>
            
        </div>
      </Layout>
  )
}

export default principios