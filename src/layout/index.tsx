import React from 'react'
// componets
import Header from './header'
import Footer from './footer'
// import Pro from '@/pages/test'



const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header/>
        {children}
      <Footer />
    </>
  )
}

export default Layout