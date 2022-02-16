import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from '../modules/Footer';

const Layout = ({children, pagina}:any) => {
  return <div>
      <Head>
          <title>Bodesa - {pagina}</title>
          <meta name='description' content='Grupo Bodesa'/>
      </Head>
      <Header/>
      {children}
      <Footer/>
  </div>;
};

export default Layout;
