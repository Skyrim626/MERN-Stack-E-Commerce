import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Hero from './partials/Hero'
import CategorySection from './partials/CategorySection'
import { Link } from 'react-router-dom';
import MostRated from '../components/MostRated';
import HomeFooter from '../components/HomeFooter';
import DiscountSection from '../components/DiscountSection';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <CategorySection /> 
      <MostRated />
      <DiscountSection />
      <HomeFooter />
    </>
  )
}
