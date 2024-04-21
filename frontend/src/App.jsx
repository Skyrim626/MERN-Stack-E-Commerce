
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './features/auth/LoginPage';
import DashLayout from './layouts/DashLayout';
import Welcome from './features/auth/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />

        <Route path='dash' element={<DashLayout />} >
          
          <Route index element={<Welcome />} />

        </Route>

      </Route>
    </Routes>
  )
}

export default App
