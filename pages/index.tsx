import type { NextPage } from 'next'
import Hero from '../modules/Hero'
import Layout from '../components/Layout'
import Status from '../modules/Status'
import Marcas from '../modules/Marcas'
import MVV from '../modules/MVV'
import Galeria  from '../modules/Galeria'

const Home: NextPage = () => {
  return (
      <Layout pagina={'Inicio'}>
        <Hero/>
        <Status/>
        <Marcas/>
        <MVV/>
        <Galeria/>
      </Layout>
  )
}

export default Home
