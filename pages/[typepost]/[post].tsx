import Image from 'next/image'
import dataPost from '../../json/dataPost.json'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Post.module.css'



const Post = () => {

  const [data, setData] = useState({})

  const router = useRouter()
  useEffect(() => {

    if (router.query.post !== undefined) {
      console.log(router.query.post);
      console.log(dataPost[router.query.post as keyof typeof dataPost]);
    }
    
    
    
  }, [router])
  
  
  return (
    <Layout pagina={router.asPath}>
      {router.query.post !== undefined && <div className={styles.containerPost} >
        <div className={styles.imgPost}>
              <Image  src="/img/placeholder.png" objectFit='cover' layout='fill' alt='postImage'/>
        </div>
        <div className={styles.desCard}>
          <p style={{fontWeight: '900', marginTop: '32px', fontSize: '32px'}}>{dataPost[router.query.post as keyof typeof dataPost].title}</p>
          <p style={{ marginBottom: '32px'}}>Publicado por: <span>{dataPost[router.query.post as keyof typeof dataPost].autor}</span> | 14/01/2022</p>
          <p  dangerouslySetInnerHTML={{__html: dataPost[router.query.post as keyof typeof dataPost].content}}/>
        </div>
     </div>}
    </Layout>
  )
}

export default Post