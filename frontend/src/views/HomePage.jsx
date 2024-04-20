import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'
import Category from '../components/Category'

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Category />

      <section className='test-section'></section>
      <section className='test-section'></section>
      <section className='test-section'></section>
      
    </>
  )
}
