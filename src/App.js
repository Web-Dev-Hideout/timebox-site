import React from 'react';
import Navbar from './components/Navbar';
import Right from './components/Right';
import Left from './components/Left'
import Footer from './components/Footer';
function App() {
  return (
    <div className='container'>
      <Left />
      <Right />
      <Footer/>
    </div>
  );
}

export default App;
