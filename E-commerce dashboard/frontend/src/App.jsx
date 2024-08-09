import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Update from './components/Update';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import Logout from './components/logout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/add' element={<AddProduct/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/my-profile' element={<MyProfile/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App
