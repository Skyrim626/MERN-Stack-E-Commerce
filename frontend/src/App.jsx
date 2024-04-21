
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './public/HomePage';
import Login from './features/auth/Login';
import DashLayout from './layouts/DashLayout';
import MainPage from './features/auth/MainPage';
import ProductsList from './features/products/ProductsList';
import EditCustomer from './features/customers/EditCustomer';
import NewCustomerForm from './features/customers/NewCustomerForm';
import CustomerList from './features/customers/CustomersList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />} >
          
          <Route index element={<MainPage />} />

          <Route path='customers'>
            <Route index element={<CustomerList />} />
            <Route path=':id' element={<EditCustomer />} />
            <Route path='new' element={<NewCustomerForm />} />
          </Route>

          <Route path='products'>
            <Route index element={<ProductsList />} />
          </Route>

          {/* <Route path='checkout'>
            <Route index element={<Checkout />} />
          </Route> */}

        </Route> {/** End Dash */}

      </Route>
    </Routes>
  )
}

export default App
