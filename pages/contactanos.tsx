import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../modules/ContactForm'
import styles from '../styles/Contactanos.module.css'

const Contactanos: NextPage = () => {

  return (
    <Layout pagina={'Contáctanos'}>
        <div className={styles.wrapperContact}>
          <h1 className={styles.contactTitle}>¿Quieres ser Proveedor?</h1>
          <ContactForm/>
        </div>
    </Layout>
  )
}

export default Contactanos