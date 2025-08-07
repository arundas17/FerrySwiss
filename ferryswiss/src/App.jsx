import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainlLayout/MainLayout';
import Home from './pages/Home/Home';
import Contact from './pages/contact/Contact';
import Pricing from './pages/pricing/Pricing';
import Blog from './pages/blog/Blog';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index  element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App
