import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../modules/ContactForm'
import styles from '../styles/Contactanos.module.css'

const Contactanos: NextPage = () => {
  return (
    <Layout>
        <div className={styles.wrapperContact}>
          <h1 className={styles.contactTitle}>Déjanos un mensaje</h1>
          <ContactForm/>
        </div>
    </Layout>
  )
}

export default Contactanos