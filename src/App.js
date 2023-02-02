import React from 'react';

import { AboutUs,  Footer, Gallery, Header,FindUs } from './components';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
