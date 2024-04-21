
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './public/HomePage';
import LoginPage from './features/auth/LoginPage';
import DashLayout from './layouts/DashLayout';
import MainPage from './features/auth/MainPage';
import ProductsList from './features/products/ProductsList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />

        <Route path='dash' element={<DashLayout />} >
          
          <Route index element={<MainPage />} />

          <Route path='products'>
            <Route index element={<ProductsList />} />
          </Route>

        </Route> {/** End Dash */}

      </Route>
    </Routes>
  )
}

export default App
