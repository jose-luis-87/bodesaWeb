import type { NextPage } from 'next'
import Hero from '../modules/Hero'
import Layout from '../components/Layout'
import Status from '../modules/Status'
import Marcas from '../modules/Marcas'
import Galeria  from '../modules/Galeria'
import BlogFeed from '../modules/BlogFeed'

const Home: NextPage = () => {
  return (
      <Layout pagina={'Inicio'}>
        <Hero/>
        <Status/>
        <Marcas/>
        <BlogFeed/>
        <Galeria/>        
      </Layout>
  )
}

export default Home
