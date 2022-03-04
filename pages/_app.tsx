import '../styles/normalize.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavProvider } from '../context/NavContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <NavProvider>
            <Component {...pageProps} />
         </NavProvider>
  
}

export default MyApp
