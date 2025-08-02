import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Aboutus from '../components/Aboutus'
import HomeCard from '../components/HomeCard'
import Testimonial from '../components/Testimonial'
import Category from '../components/Category'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Aboutus />
    <Category />
    <HomeCard />
    <Testimonial />
    <Footer />
    </>
  )
}

export default Home