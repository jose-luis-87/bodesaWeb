import type { NextPage } from 'next'
import Hero from '../modules/Hero'
import Layout from '../components/Layout'
import Status from '../modules/Status'
import Marcas from '../modules/Marcas'
import Galeria  from '../modules/Galeria'
import BlogFeed from '../modules/BlogFeed'
import { useContext, useEffect, useRef } from 'react'
import { NavContext } from '../context/NavContext'
import SliderHero from '../components/SliderHero'

const Home: NextPage = () => {

  const [section] = useContext(NavContext)

  const refHero = useRef()
  const refStatus = useRef()
  const refMarcas = useRef()
  const refBlogFeed = useRef()

  const scrollToRef = (ref:any) => {

    window.scrollTo(0, ref.current.offsetTop);

  }

  useEffect(() => {


    switch (section) {

      case 0:
        scrollToRef(refHero)
        break;
      case 1:
        scrollToRef(refStatus)

        break;
      case 2:
        scrollToRef(refMarcas)
        break;
      case 3:
        scrollToRef(refBlogFeed)
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }

  }, [section])

  return (
      <Layout pagina={'Inicio'}>
        {/* <Hero forwardRef={refHero}/> */}
        <SliderHero forwardRef={refHero}/>
        <Status forwardRef={refStatus}/>
        <Marcas forwardRef={refMarcas}/>
        <BlogFeed forwardRef={refBlogFeed}/>
        <Galeria />        
      </Layout>
  )
}

export default Home
