import React from 'react'

import Button from '../components/Button';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import TopBar from '../components/TopBar';
import Category from '../components/Category';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <TopBar />
      <Category />
      <Hero />
      <ProductCard />
    </div>
  )
}

export default LandingPage
