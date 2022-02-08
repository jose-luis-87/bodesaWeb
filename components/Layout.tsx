import React from 'react';
import Head from 'next/head'
import Header from './Header';

const Layout = ({children, pagina}:any) => {
  return <div>
      <Head>
          <title>Bodesa - {pagina}</title>
          <meta name='description' content='Grupo Bodesa'/>
      </Head>
      <Header/>
      {children}
  </div>;
};

export default Layout;
