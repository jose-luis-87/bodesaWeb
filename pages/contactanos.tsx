import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Contactanos.module.css'

const Contactanos: NextPage = () => {
  return (
    <Layout>
        <div className={styles.wrapperContact}>
          <h1>Contactanos</h1>  
        </div>
    </Layout>
  )
}

export default Contactanos