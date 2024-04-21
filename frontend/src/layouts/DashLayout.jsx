import React from 'react'
import { Outlet } from 'react-router-dom';
import DashHeader from '../components/DashHeader';
import HomeFooter from '../components/HomeFooter';

export default function DashLayout() {
  return (
    <>
      <DashHeader />
        <main className='dash-container'>
          <Outlet />
        </main>
      <HomeFooter />
      
    </>
  )
}
