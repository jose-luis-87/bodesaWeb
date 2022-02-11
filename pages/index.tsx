import type { NextPage } from 'next'
import Hero from '../modules/Hero'
import Layout from '../components/Layout'
import Status from '../modules/Status'
import Marcas from '../modules/Marcas'

const Home: NextPage = () => {
  return (
      <Layout pagina={'Inicio'}>
        <Hero/>
        <Status/>
        <Marcas/>
      </Layout>
  )
}

export default Home
