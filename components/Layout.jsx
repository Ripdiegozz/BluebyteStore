import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <Header />
      </header>
      <main className='container mx-auto pt-[8vh]'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
