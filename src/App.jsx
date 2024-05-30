// import { useState } from 'react'
import Header from './components/Header';
import './assets/css/style.css';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Reniebin from './pages/RenieBin/Reniebin';

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Reniebin /> */}
      <Footer />
    </>
  );
}

export default App;
