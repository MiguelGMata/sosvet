import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/routes/AppRouter'
import Navbar from './components/organisms/navbar/Navbar';
import Footer from './components/organisms/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css'



const App = () => {

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  )
}

export default App
