import React from 'react'
import Head from '../components/head'
import Header from '../components/header'
import MainVisual from '../components/mv'
import Profile from '../components/profile'
import Works from '../components/works'
import Footer from '../components/footer'

const Portfolio = () => {
  
  return(
    <>
      <Head/>
      <Header indexJudge={ true }/>
      <main className="l-main">
        <MainVisual/>
        <Profile/>
        <Works/>
      </main>
      <Footer/>
    </>
  )
}

export default Portfolio