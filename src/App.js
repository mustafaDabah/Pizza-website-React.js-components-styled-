import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from  './GlobalStyle.js';
import Hero from './Component/HeroSection/index.js'
import Product from './Component/Products/Index.js';
import {productData , sweetData } from './Component/Products/data.js'
import Feature from './Component/Feature/Index.js';
import Footer from './Component/Footer/index.js';


function App () {
                                   
   return (
       <Router>
            <GlobalStyle/>
            <Hero/>
            <Product data={productData} heading="fast food easy way" />
            <Feature/>
            <Product data={sweetData} heading="fast sweet you like it " />
            <Footer/>
       </Router>
    )}


export default App;
