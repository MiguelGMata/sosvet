import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/routes/AppRouter'
import Navbar from './components/organisms/navbar/Navbar';
import Footer from './components/organisms/footer/Footer';
import './styles/global.css'



const App = () => {

  return (
    <Router>
      <div className="app">
        <Navbar/>
        <AppRouter/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
