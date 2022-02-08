import type { NextPage } from 'next'
import Hero from '../modules/Hero'
import Layout from '../components/Layout'
import Status from '../modules/Status'

const Home: NextPage = () => {
  return (
      <Layout pagina={'Inicio'}>
        <Hero/>
        <Status/>
      </Layout>
  )
}

export default Home
