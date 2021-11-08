import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    
    </div>
  );
}

export default App;
