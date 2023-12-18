import React from 'react'
import Announcement from '../Components/Announcement'
import Brand from '../Components/Brand'
import Categories from '../Components/Categories'
import Nav from '../Components/Nav'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import News from '../Components/News'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Nav/>
        <Brand/>
        <Slider/>
        <Categories/>
        <Products/>
        <News/>
        <Footer/>
    </div>
  )
}
export default Home