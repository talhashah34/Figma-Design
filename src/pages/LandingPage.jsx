import React from 'react'

import Button from '../components/Button';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import TopBar from '../components/TopBar';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <TopBar />
      <Button />
      <Hero />
      <ProductCard />
    </div>
  )
}

export default LandingPage
