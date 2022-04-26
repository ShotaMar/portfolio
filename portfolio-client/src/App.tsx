import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import TopPage from './pages/TopPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage />}></Route>
        {/* <Route path='/about' element={<AboutPage />}></Route> */}
        <Route path='/blog' element={<BlogPage />}></Route>
        {/* <Route path='/portfolio' element={<PortfolioPage />}></Route> */}
        {/* <Route path='/contact' element={<ContactPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
