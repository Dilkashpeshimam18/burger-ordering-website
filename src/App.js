import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero';
import { productData, productDataTwo } from './components/Products/data';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products'
import Feature from './components/Features.js';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favourites' data={productData} />
      <Feature />
      <Products heading='More Burgers' data={productDataTwo} />
      <Footer />
    
    </Router>
  );
}

export default App;
