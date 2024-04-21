import React from 'react'
import { Outlet } from 'react-router-dom';
import DashHeader from '../components/DashHeader';
import DashFooter from '../components/DashFooter';

export default function DashLayout() {
  return (
    <>
      <DashHeader />
        <main className='dash-container'>
          <Outlet />
        </main>
      <DashFooter />
      
    </>
  )
}
