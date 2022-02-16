import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/TypePost.module.css'
import BlogFeed, { CardBlog } from '../modules/BlogFeed'

const Typepost = () => {
  const router = useRouter()
  console.log(router);
  
  return (
    <Layout pagina={router.asPath}>
      <Header/>
        <div className={styles.bannerPost}>
        <CardBlog w={'33.33%'} f={'0 0 100%'} himg={ '60%'}/>
        </div>
     
        <BlogFeed/>

    </Layout>
  )
}

export default Typepost